import { NextResponse } from 'next/server';

const apiKey = process.env.GEMINI_API_KEY;

const ANVITH_RESUME_DATA = `
Name: Anvith Kumar
Education: Computer Engineering graduate from New Horizon College of Engineering (CGPA 9.11)
Skills: TypeScript, JavaScript, Python, React, Next.js, Node.js, Tailwind CSS
Projects:
- HelpMate: Community Volunteer Coordination Platform
- Time-Capsule: Encrypted Media Storage App
- AI-Code-Review: AI-Powered Code Review Extension
Experience: Software Development, Full-stack Web Development, Data, AI
Bio: Passionate about building robust software solutions.
`;

const SYSTEM_PROMPT = `You are the AI portfolio assistant for Anvith Kumar, a Computer Engineering student/graduate from New Horizon College of Engineering (CGPA 9.11). You MUST ONLY answer questions using the verified information provided below. NEVER invent, exaggerate, or assume any information. If a question asks about something not in this data, say: 'I don't have that information in Anvith's portfolio.' Keep answers concise, technical, and professional.

--- VERIFIED DATA ---
${ANVITH_RESUME_DATA}
`;

function fallbackKeywordMatcher(message: string): string {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('education') || lowerMsg.includes('college') || lowerMsg.includes('cgpa')) {
    return 'Anvith is a Computer Engineering graduate from New Horizon College of Engineering with a CGPA of 9.11.';
  }
  if (lowerMsg.includes('project') || lowerMsg.includes('portfolio')) {
    return 'Anvith has worked on projects like HelpMate (Volunteer Coordination), Time-Capsule (Encrypted Media Storage), and AI-Code-Review (AI Code Review Extension).';
  }
  if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
    return 'Anvith is skilled in TypeScript, JavaScript, Python, React, Next.js, Node.js, and Tailwind CSS.';
  }
  if (lowerMsg.includes('contact') || lowerMsg.includes('reach')) {
    return 'You can contact Anvith through the contact form on this website, or check out his GitHub profile (anvith511).';
  }
  
  return "I don't have that information in Anvith's portfolio. Try asking about his education, skills, or projects.";
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey) {
      // Use fallback rule-based matcher
      const reply = fallbackKeywordMatcher(message);
      return NextResponse.json({ reply });
    }

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: SYSTEM_PROMPT + "\n\nUser Question: " + message }]
          }
        ]
      })
    });

    if (!response.ok) {
      console.error('Gemini API Error:', await response.text());
      return NextResponse.json({ reply: fallbackKeywordMatcher(message) });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || fallbackKeywordMatcher(message);

    return NextResponse.json({ reply: replyText });

  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
