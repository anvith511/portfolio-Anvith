'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { Terminal } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="cat about.md --full" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                About Anvith
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Computer Engineering graduate with a strong problem-solving mindset and practical systems engineering experience.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Engineering software that addresses real-world complexity.
            </h3>
            
            <div className="space-y-6 text-lg md:text-xl text-[var(--foreground)] font-light leading-relaxed">
              <p>
                I am a Computer Engineering graduate from <strong className="font-medium">New Horizon College of Engineering (NHCE)</strong> with a <strong className="font-medium">9.11 CGPA</strong>, based in Bengaluru, India. My engineering work is grounded in clean backend architecture, applied artificial intelligence, and rock-solid algorithmic problem solving.
              </p>
              <p>
                Having solved over <strong className="font-medium">370+ algorithmic problems on LeetCode</strong> with a 100-day consistency streak, I combine strong analytical rigor with practical full-stack execution. Through internships at <strong className="font-medium">MindMatrix.io</strong> (AI App Development) and the <strong className="font-medium">NIIT Foundation / Cisco CSR</strong> (Cyber & AI Workforce), I have worked on production-oriented AI inference workflows, security operations, and scalable REST services.
              </p>
              <p>
                Whether designing geospatial query optimizations in MongoDB, architecting AES-256 encrypted media storage, or implementing browser-level AI code review extensions, my focus is delivering software that is fast, resilient, and directly useful.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[var(--border-light)] p-8 bg-[var(--muted)] shadow-[6px_6px_0px_var(--border-light)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] mb-6 uppercase tracking-widest border-b border-[var(--border-light)] pb-4">
                <Terminal size={14} className="text-[var(--foreground)]" />
                <span>// Core Pillars & Focus</span>
              </div>

              <ul className="space-y-5 font-mono text-xs sm:text-sm text-[var(--foreground)]">
                <li className="flex items-start gap-4">
                  <span className="text-[var(--muted-foreground)] font-bold">01</span>
                  <div>
                    <span className="font-bold block">Full-Stack Systems Architecture</span>
                    <span className="text-xs text-[var(--muted-foreground)] font-sans">Next.js, React Native, Node.js, FastAPI, and modular microservices.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--muted-foreground)] font-bold">02</span>
                  <div>
                    <span className="font-bold block">Applied AI & API Engineering</span>
                    <span className="text-xs text-[var(--muted-foreground)] font-sans">Prompt engineering, model inference, and real-time developer tooling.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--muted-foreground)] font-bold">03</span>
                  <div>
                    <span className="font-bold block">Database Modeling & Geospatial Indexing</span>
                    <span className="text-xs text-[var(--muted-foreground)] font-sans">MongoDB 2dsphere indexing, PostgreSQL relational models, query performance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--muted-foreground)] font-bold">04</span>
                  <div>
                    <span className="font-bold block">Cybersecurity & Applied Cryptography</span>
                    <span className="text-xs text-[var(--muted-foreground)] font-sans">AES-256 client-side encryption, RBAC security, and network defense principles.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-4 border-t border-[var(--border-light)] flex items-center justify-between font-mono text-xs text-[var(--muted-foreground)]">
                <span>NEW HORIZON COLLEGE OF ENG</span>
                <span className="text-[var(--foreground)] font-bold">CGPA: 9.11</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
