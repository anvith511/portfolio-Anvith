'use client';

import React from 'react';
import Link from 'next/link';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { FadeIn } from '../animations/FadeIn';
import { TypingAnimation } from '../animations/TypingAnimation';
import { CursorBlink } from '../animations/CursorBlink';
import { Button } from '../ui/Button';
import { GitBranch, Briefcase, Mail, MapPin, ArrowDownRight, Terminal, FileText, Download } from 'lucide-react';
import { personalData } from '@/data/personal';

export const HeroSection = () => {
  return (
    <section className="min-h-[88vh] flex items-center pt-28 pb-20 lg:py-0 border-b border-[var(--border-light)]">
      <div className="content-width grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <FadeIn delay={0.2} className="lg:col-span-7 flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <TerminalPrompt command="whoami" className="mb-0" />
            <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted-foreground)] px-2.5 py-1 border border-[var(--border-light)] bg-[var(--muted)]">
              <MapPin size={12} className="text-[var(--foreground)]" />
              <span>{personalData.location}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-[var(--foreground)]">
              <TypingAnimation text="ANVITH" />
              <br />
              <span className="text-[var(--muted-foreground)]">
                <TypingAnimation text="KUMAR_" delay={0.8} />
              </span>
            </h1>
            
            <div className="font-mono text-sm md:text-base text-[var(--muted-foreground)] space-y-1 pt-2">
              <p className="flex items-center gap-2">
                <span className="text-[var(--foreground)]">&gt;</span>
                <span>Computer Engineering Graduate ({personalData.college})</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[var(--foreground)]">&gt;</span>
                <span className="text-[var(--foreground)] font-medium">{personalData.title}</span>
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-[var(--foreground)] font-light leading-relaxed max-w-xl">
            {personalData.tagline} Focused on high-performance backends, clean interfaces, and intelligent systems.
          </p>

          {/* Prominent Action Buttons with View & Download Resume */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="#projects">
              <Button variant="primary" size="lg" className="group">
                <span>View Projects</span>
                <ArrowDownRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="secondary" size="lg" className="flex items-center gap-2">
                <FileText size={15} />
                <span>View Resume</span>
              </Button>
            </Link>
            <a href="/api/resume" download={personalData.resume.fileName}>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Download size={15} />
                <span>Download PDF</span>
              </Button>
            </a>
            <Link href="#about">
              <Button variant="ghost" size="lg">About</Button>
            </Link>
          </div>

          {/* Social and Contact Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[var(--border-light)] font-mono text-xs text-[var(--muted-foreground)]">
            <a 
              href={personalData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
            >
              <GitBranch size={14} />
              <span>github.com/anvith511</span>
            </a>
            <a 
              href={personalData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
            >
              <Briefcase size={14} />
              <span>linkedin</span>
            </a>
            <a 
              href={personalData.socials.email} 
              className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
            >
              <Mail size={14} />
              <span>{personalData.email}</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center h-full">
          <div className="w-full border border-[var(--border-light)] bg-[var(--muted)] p-6 font-mono text-xs shadow-[8px_8px_0px_var(--border-light)]">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[var(--foreground)]" />
                <span className="font-bold text-[var(--foreground)]">terminal.env</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full border border-[var(--border-light)] bg-[var(--background)]" />
                <div className="w-2.5 h-2.5 rounded-full border border-[var(--border-light)] bg-[var(--background)]" />
                <div className="w-2.5 h-2.5 rounded-full border border-[var(--border-light)] bg-[var(--foreground)]" />
              </div>
            </div>

            <div className="space-y-3 text-[var(--foreground)]">
              <div>
                <span className="text-[var(--muted-foreground)]">$ </span>
                <span className="text-[var(--foreground)] font-bold">system_profile --specs</span>
              </div>
              <div className="pl-4 space-y-1.5 text-[var(--muted-foreground)]">
                <p><span className="text-[var(--foreground)]">ROLE:</span> Software Engineer</p>
                <p><span className="text-[var(--foreground)]">DEGREE:</span> B.E. Computer Engineering (NHCE)</p>
                <p><span className="text-[var(--foreground)]">CGPA:</span> 9.11 / 10.0</p>
                <p><span className="text-[var(--foreground)]">DSA_RECORD:</span> 370+ LeetCode (100d streak)</p>
                <p><span className="text-[var(--foreground)]">INTERNSHIPS:</span> MindMatrix.io & Cisco CSR</p>
                <p><span className="text-[var(--foreground)]">STATUS:</span> Open to SWE / Full-Stack / AI roles</p>
              </div>

              <div className="pt-2">
                <span className="text-[var(--muted-foreground)]">$ </span>
                <span className="text-[var(--foreground)]">curl -s https://api.anvith.dev/health</span>
              </div>
              <div className="pl-4 text-emerald-500 font-bold">
                {`{"status": "READY", "uptime": "100%", "verified": true}`}
              </div>

              <div className="pt-2 flex items-center">
                <span className="text-[var(--muted-foreground)]">$ </span>
                <span className="ml-1 text-[var(--foreground)]">_</span>
                <CursorBlink />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
