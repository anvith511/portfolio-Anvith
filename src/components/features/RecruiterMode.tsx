'use client';

import React from 'react';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';

type RecruiterModeProps = {
  isActive?: boolean;
  onClose?: () => void;
};

export default function RecruiterMode({ isActive: propActive, onClose: propClose }: RecruiterModeProps = {}) {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();
  const isActive = propActive !== undefined ? propActive : isRecruiterMode;
  const onClose = propClose || toggleRecruiterMode;

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12 border-b border-black pb-4">
          <h1 className="text-xl font-bold tracking-tight">RECRUITER_MODE_ACTIVE</h1>
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm font-bold uppercase"
          >
            Exit Recruiter Mode
          </button>
        </div>

        <header className="mb-12">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Anvith Kumar</h2>
          <p className="text-xl font-medium text-gray-600 mb-6">Software | Data | AI | Computer Engineering</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-sm font-bold border border-gray-300">370+ LeetCode</span>
            <span className="px-3 py-1 bg-gray-100 text-sm font-bold border border-gray-300">9.11 CGPA</span>
            <span className="px-3 py-1 bg-gray-100 text-sm font-bold border border-gray-300">2 Internships</span>
            <span className="px-3 py-1 bg-gray-100 text-sm font-bold border border-gray-300">6+ Projects</span>
          </div>

          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" className="bg-black text-white px-6 py-2 font-bold text-sm">Download Resume</a>
            <a href="https://github.com/anvith511" target="_blank" className="border border-black px-6 py-2 font-bold text-sm">GitHub</a>
            <a href="https://linkedin.com/in/anvith-kumar-7313a8220" target="_blank" className="border border-black px-6 py-2 font-bold text-sm">LinkedIn</a>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4 uppercase">Experience</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-bold">Data Scientist Intern</h4>
                <span className="text-sm font-mono">July 2024 - Present</span>
              </div>
              <p className="font-medium text-gray-700">MindMatrix</p>
              <p className="text-sm mt-2 text-gray-600">Built scalable web apps, managed real-time data, and created responsive interfaces.</p>
              <p className="text-sm font-mono mt-1">Tech: React, Typescript, Tailwind CSS, Express, Prisma</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-bold">Web Developer Intern</h4>
                <span className="text-sm font-mono">May 2024 - June 2024</span>
              </div>
              <p className="font-medium text-gray-700">Codecrafters</p>
              <p className="text-sm mt-2 text-gray-600">Developed landing pages with GSAP animations, built a responsive React app with real-time API integrations.</p>
              <p className="text-sm font-mono mt-1">Tech: React, GSAP, HTML, CSS</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4 uppercase">Key Projects</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold">HelpMate</h4>
              <p className="text-sm mt-1 text-gray-600">An ecosystem connecting individuals with special needs to volunteers and opportunities.</p>
              <p className="text-sm font-mono mt-1">Tech: React Native, Node.js, Express, MongoDB, Socket.io, JWT</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Time Capsule</h4>
              <p className="text-sm mt-1 text-gray-600">A digital memory platform for sending messages into the future.</p>
              <p className="text-sm font-mono mt-1">Tech: Next.js, Resend, React, MongoDB, Next-auth</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">AI Code Companion</h4>
              <p className="text-sm mt-1 text-gray-600">An AI assistant for debugging and understanding code.</p>
              <p className="text-sm font-mono mt-1">Tech: Next.js, Google Gemini, CodeMirror, Tailwind CSS</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4 uppercase">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h5 className="font-bold mb-2">Languages</h5>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>C/C++</li>
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Frontend</h5>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>React Native</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Backend</h5>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Prisma</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Tools</h5>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
