import { NextResponse } from 'next/server';

const apiKey = process.env.GEMINI_API_KEY;

const ANVITH_RESUME_DATA = `
Name: Anvith Kumar
Location: Bengaluru, Karnataka, India
Email: anvithkumar511@gmail.com
GitHub: https://github.com/anvith511
LinkedIn: https://linkedin.com/in/anvith-kumar-7313a8220
LeetCode: https://leetcode.com/u/anvithkumar511/

Education:
- New Horizon College of Engineering (NHCE), Bengaluru
- Bachelor of Engineering (B.E.) in Computer Engineering (2022 - 2026)
- CGPA: 9.11 / 10.0 (Top percentile standing)

Experience:
1. MindMatrix.io — AI App Developer Intern (Feb 2026 - May 2026)
   - Developed AI-powered applications and integrated machine learning models into production systems.
   - Prompt engineering, model evaluation, and backend service optimization using Python and FastAPI.
2. NIIT Foundation | Cisco CSR — Cyber & AI Workforce Intern (Jun 2026 - Sep 2026)
   - Cybersecurity fundamentals, network defense, threat analysis, and AI workforce automation scripts.

Projects:
1. HelpMate: Community Volunteer Coordination Platform
   - Tech: React Native, FastAPI, MongoDB, Clerk, Stripe, Leaflet
   - Features: Real-time geospatial proximity matching using MongoDB 2dsphere indexing, volunteer scheduling, secure auth with Clerk, and donation processing with Stripe.
2. Time Capsule: Encrypted Media Storage App
   - Tech: React, Node.js, Express, MongoDB, AES-256 Encryption, NodeMailer, Cloudinary
   - Features: Zero-knowledge client-side AES-256 encryption, time-locked scheduled delivery, automated cron triggers, and Cloudinary media preservation.
3. AI Code: AI-Powered Code Review Extension
   - Tech: React, Tailwind CSS, Flask, SQLite, Chrome Extension API, Google Gemini API
   - Features: Contextual code review, security vulnerability identification, performance recommendations directly in browser and GitHub PRs.

Technical Skills:
- Languages: Java, Python, JavaScript, TypeScript, SQL
- Frontend: React, React Native, Next.js, Tailwind CSS, HTML5, CSS3
- Backend: Node.js, Express, FastAPI, Flask, REST APIs
- Databases: MongoDB, PostgreSQL, SQLite
- AI / ML: Google Gemini API, Prompt Engineering, Model Evaluation
- Security: Cryptography (AES-256), RBAC, Network Defense, Digital Forensics, Vulnerability Assessment
- Tools: Git, GitHub, Postman, Tableau, Snowflake, Android Studio, VS Code, Docker
- Core CS: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design

Achievements & Proof of Work:
- 370+ LeetCode algorithmic problems solved
- 100-day consistency streak badge on LeetCode
- State-level athletics / handball participant
- VTU Handball Nationals representative (Visvesvaraya Technological University)
- Certifications: Google Foundations of Cybersecurity, IBM Cloud Computing Fundamentals, Microsoft Data Analyst 101, Simplilearn Introduction to Tableau
`;

const SYSTEM_PROMPT = `You are the AI portfolio assistant for Anvith Kumar, a Computer Engineering graduate from New Horizon College of Engineering (CGPA 9.11). You MUST ONLY answer questions using the verified information provided below. NEVER invent, exaggerate, or assume any information. If a question asks about something not in this data, say: "I don't have that information in Anvith's portfolio." Keep answers concise, technical, and professional.

--- VERIFIED DATA ---
${ANVITH_RESUME_DATA}
`;

function fallbackKeywordMatcher(message: string): string {
  const lower = message.toLowerCase();
  
  if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa') || lower.includes('university') || lower.includes('degree')) {
    return 'Anvith is a Computer Engineering graduate from New Horizon College of Engineering (NHCE) with a 9.11 CGPA.';
  }
  if (lower.includes('helpmate')) {
    return 'HelpMate is a community volunteer coordination platform built by Anvith using React Native, FastAPI, MongoDB (with 2dsphere geospatial indexing), Clerk, Stripe, and Leaflet.';
  }
  if (lower.includes('time capsule') || lower.includes('capsule')) {
    return 'Time Capsule is an encrypted media storage platform built with React, Node.js, Express, MongoDB, and client-side AES-256 encryption for time-locked deliveries.';
  }
  if (lower.includes('ai code') || lower.includes('extension') || lower.includes('gemini')) {
    return 'AI Code is a Chrome extension built with React, Flask, and Google Gemini API that provides automated code reviews and security vulnerability scanning.';
  }
  if (lower.includes('project') || lower.includes('portfolio') || lower.includes('built')) {
    return 'Anvith has built HelpMate (Volunteer Coordination with Geospatial Matching), Time Capsule (AES-256 Encrypted Media Storage), and AI Code (AI-Powered Code Review Extension).';
  }
  if (lower.includes('experience') || lower.includes('intern') || lower.includes('work') || lower.includes('mindmatrix') || lower.includes('cisco')) {
    return 'Anvith worked as an AI App Developer Intern at MindMatrix.io (Feb-May 2026) and as a Cyber & AI Workforce Intern at NIIT Foundation / Cisco CSR (Jun-Sep 2026).';
  }
  if (lower.includes('leetcode') || lower.includes('dsa') || lower.includes('streak') || lower.includes('problem')) {
    return 'Anvith has solved over 370+ problems on LeetCode across arrays, dynamic programming, trees, and graphs, holding a 100-day consistency streak badge.';
  }
  if (lower.includes('certification') || lower.includes('cert') || lower.includes('google') || lower.includes('ibm')) {
    return 'Anvith holds certifications in Google Foundations of Cybersecurity, IBM Cloud Computing, Microsoft Data Analyst 101, and Simplilearn Tableau.';
  }
  if (lower.includes('security') || lower.includes('cyber')) {
    return 'Anvith has experience in cryptography (AES-256), RBAC, vulnerability assessment, and completed the Cisco CSR Cyber & AI Workforce internship and Google Cybersecurity certificate.';
  }
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
    return 'Anvith is skilled in Java, Python, JavaScript, TypeScript, SQL, React, React Native, Next.js, Node.js, FastAPI, MongoDB, and system design.';
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
    return 'You can contact Anvith at anvithkumar511@gmail.com, on LinkedIn (anvith-kumar-7313a8220), or through GitHub (github.com/anvith511).';
  }
  
  return "I don't have that information in Anvith's portfolio. You can ask about his projects (HelpMate, Time Capsule, AI Code), skills, internships, LeetCode record, or education.";
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!apiKey) {
      const reply = fallbackKeywordMatcher(message);
      return NextResponse.json({ reply });
    }

    // Call Gemini API server-side
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
      return NextResponse.json({ reply: fallbackKeywordMatcher(message) });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || fallbackKeywordMatcher(message);

    return NextResponse.json({ reply: replyText });

  } catch {
    return NextResponse.json({ reply: fallbackKeywordMatcher("help") });
  }
}
