import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

export async function GET() {
  try {
    // Check if Supabase is configured
    if (supabase) {
      // Try to get resume file URL from storage (assuming bucket is 'public' and path is 'resume/Anvith_Kumar_Resume.pdf')
      const { data } = supabase.storage.from('public').getPublicUrl('resume/Anvith_Kumar_Resume.pdf');
      
      if (data && data.publicUrl) {
        return NextResponse.redirect(data.publicUrl);
      }
    }

    // Fallback if Supabase is not configured or file not found
    return NextResponse.json({
      url: '/resume-placeholder.pdf', // Can be a local placeholder file in public folder
      filename: 'Anvith_Kumar_Resume.pdf',
      message: 'Resume download is currently unavailable, returning placeholder data.'
    });

  } catch (error) {
    console.error('Resume API error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve resume' },
      { status: 500 }
    );
  }
}
