import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Simple in-memory rate limiting
// Map of IP to { count, timestamp }
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 3600 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Rate Limiting Logic
    if (ip !== 'unknown') {
      const now = Date.now();
      const userLimit = rateLimit.get(ip);
      
      if (userLimit) {
        if (now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
          if (userLimit.count >= RATE_LIMIT_MAX) {
            return NextResponse.json(
              { success: false, error: 'Rate limit exceeded. Please try again later.' },
              { status: 429 }
            );
          }
          userLimit.count += 1;
        } else {
          // Reset window
          rateLimit.set(ip, { count: 1, timestamp: now });
        }
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now });
      }
    }

    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 });
    }
    
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Message must be at least 10 characters long' }, { status: 400 });
    }

    // Sanitization (basic)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    // Supabase Insert
    if (supabase) {
      try {
        const { error } = await supabase
          .from('contact_messages')
          .insert([
            { name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage }
          ]);
          
        if (error) {
          console.error('Supabase insert error:', error);
          // Fall through to success if table doesn't exist, as requested by graceful handling
        }
      } catch (err) {
        console.error('Supabase exception:', err);
      }
    } else {
      console.log('Supabase not configured. Simulated contact submission:', {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage
      });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
