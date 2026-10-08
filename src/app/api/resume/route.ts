import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

export async function GET() {
  try {
    // Check if Supabase has a custom uploaded resume
    if (supabase) {
      try {
        const { data } = supabase.storage.from('public').getPublicUrl('resume/Anvith_Kumar_Resume.pdf');
        if (data && data.publicUrl) {
          return NextResponse.redirect(data.publicUrl);
        }
      } catch (e) {
        console.error('Supabase storage check error:', e);
      }
    }

    // Serve local production PDF file
    const filePath = path.join(process.cwd(), 'public', 'Anvith_Kumar_Resume.pdf');
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Anvith_Kumar_Resume.pdf"',
          'Content-Length': fileBuffer.length.toString(),
        },
      });
    }

    // Fallback redirect to public asset
    return NextResponse.redirect(new URL('/Anvith_Kumar_Resume.pdf', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  } catch (error) {
    console.error('Resume API error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve resume' },
      { status: 500 }
    );
  }
}
