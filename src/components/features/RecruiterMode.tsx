'use client';

import React from 'react';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';
import { FileText, GitBranch, Briefcase, Mail, X, CheckCircle2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] bg-white text-black overflow-y-auto font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10 border-b-2 border-black pb-4">
          <div className="font-mono text-xs uppercase tracking-widest font-bold">
            RECRUITER_MODE // 20-SECOND CANDIDATE OVERVIEW
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-black hover:bg-black hover:text-white transition-colors text-xs font-mono font-bold uppercase cursor-pointer"
          >
            <X size={14} />
            <span>Exit Recruiter Mode</span>
          </button>
        </div>

        <header className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-2">Anvith Kumar</h2>
          <p className="text-lg font-medium text-gray-700 mb-6">
            Computer Engineering Graduate (NHCE, CGPA 9.11) | Software Engineering, Data, AI & Security
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6 font-mono text-xs font-bold">
            <span className="px-3 py-1 bg-gray-100 border border-black">370+ LEETCODE SOLVED</span>
            <span className="px-3 py-1 bg-gray-100 border border-black">9.11 CGPA (TOP PERCENTILE)</span>
            <span className="px-3 py-1 bg-gray-100 border border-black">2 INDUSTRY INTERNSHIPS</span>
            <span className="px-3 py-1 bg-gray-100 border border-black">6+ PRODUCTION PROJECTS</span>
            <span className="px-3 py-1 bg-gray-100 border border-black">VTU NATIONALS ATHLETE</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="/api/resume" 
              download 
              className="bg-black text-white px-5 py-2.5 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <FileText size={14} />
              <span>Download Resume (PDF)</span>
            </a>
            <a 
              href="https://github.com/anvith511" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-black px-4 py-2 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
            >
              <GitBranch size={14} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/anvith-kumar-7313a8220" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-black px-4 py-2 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
            >
              <Briefcase size={14} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:anvithkumar511@gmail.com" 
              className="border border-black px-4 py-2 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
            >
              <Mail size={14} />
              <span>Contact</span>
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold border-b border-black pb-2 mb-6 uppercase tracking-wider font-mono">
            // Professional Experience
          </h3>
          <div className="space-y-6">
            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h4 className="text-base font-bold">AI App Developer Intern</h4>
                <span className="text-xs font-mono text-gray-600">Feb 2026 – May 2026</span>
              </div>
              <p className="font-semibold text-sm text-gray-800">MindMatrix.io</p>
              <p className="text-sm mt-2 text-gray-700 leading-relaxed font-sans">
                Developing AI-powered applications and integrating machine learning models into production systems. Working on prompt engineering, model evaluation, and backend service optimization.
              </p>
              <p className="text-xs font-mono mt-2 font-medium">Tech: Python, FastAPI, Machine Learning, API Development</p>
            </div>

            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h4 className="text-base font-bold">Cyber & AI Workforce Intern</h4>
                <span className="text-xs font-mono text-gray-600">Jun 2026 – Sep 2026</span>
              </div>
              <p className="font-semibold text-sm text-gray-800">NIIT Foundation | Cisco CSR</p>
              <p className="text-sm mt-2 text-gray-700 leading-relaxed font-sans">
                Specialized training and practical work in cybersecurity fundamentals, network defense, threat analysis, and AI-driven security operations through Cisco CSR initiative.
              </p>
              <p className="text-xs font-mono mt-2 font-medium">Tech: Cybersecurity, Network Defense, Threat Analysis, Cisco Security</p>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold border-b border-black pb-2 mb-6 uppercase tracking-wider font-mono">
            // Core Engineering Projects
          </h3>
          <div className="space-y-6">
            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold">HelpMate</h4>
                <span className="text-xs font-mono text-gray-600">Full Stack / Mobile</span>
              </div>
              <p className="text-sm mt-1 text-gray-700 leading-relaxed">
                Cross-platform mobile application with geospatial 2dsphere proximity matching connecting volunteers with nearby community needs in real-time.
              </p>
              <p className="text-xs font-mono mt-2 font-medium">Tech: React Native, FastAPI, MongoDB, Clerk, Stripe, Leaflet</p>
            </div>

            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold">Time Capsule</h4>
                <span className="text-xs font-mono text-gray-600">Full Stack / Security</span>
              </div>
              <p className="text-sm mt-1 text-gray-700 leading-relaxed">
                Encrypted media vault where messages and media are client-side cryptographically locked using AES-256 until designated future unlock dates.
              </p>
              <p className="text-xs font-mono mt-2 font-medium">Tech: React, Node.js, Express, MongoDB, AES Encryption, NodeMailer, Cloudinary</p>
            </div>

            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold">AI Code Review Extension</h4>
                <span className="text-xs font-mono text-gray-600">AI / Developer Tools</span>
              </div>
              <p className="text-sm mt-1 text-gray-700 leading-relaxed">
                Browser extension providing contextual code reviews, security vulnerability scanning, and performance suggestions using Google Gemini AI.
              </p>
              <p className="text-xs font-mono mt-2 font-medium">Tech: React, Tailwind CSS, Flask, SQLite, Chrome Extension API, Gemini</p>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="mb-12">
          <h3 className="text-xl font-bold border-b border-black pb-2 mb-6 uppercase tracking-wider font-mono">
            // Education & Honors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="font-mono text-xs text-gray-600 mb-1">2022 – 2026 // Bengaluru, India</div>
              <h4 className="text-base font-bold">New Horizon College of Engineering</h4>
              <p className="text-sm text-gray-800">B.E. in Computer Engineering</p>
              <p className="text-xs font-mono font-bold mt-2 text-black">CGPA: 9.11 / 10.0</p>
            </div>

            <div className="border border-gray-300 p-5 bg-gray-50">
              <div className="font-mono text-xs text-gray-600 mb-1">Verified Achievements</div>
              <ul className="text-xs space-y-1.5 text-gray-800 font-mono">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-black" />
                  <span>370+ LeetCode DSA Solutions</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-black" />
                  <span>100-Day LeetCode Streak Badge</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-black" />
                  <span>VTU Handball Nationals Athlete</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-black" />
                  <span>Google, IBM, Microsoft Certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-black pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-600 gap-4">
          <div>Anvith Kumar &bull; anvithkumar511@gmail.com &bull; Bengaluru, India</div>
          <button 
            onClick={onClose}
            className="text-black font-bold underline hover:no-underline"
          >
            Back to Interactive Portfolio &rarr;
          </button>
        </footer>
      </div>
    </div>
  );
}
