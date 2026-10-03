'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="cat about.md" className="mb-16" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Engineering with purpose.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                I am a Computer Engineering student and software developer based in Bengaluru, India. 
                My focus lies at the intersection of robust backend systems, artificial intelligence, and clean, functional interfaces.
              </p>
              <p>
                With a strong foundation in Data Structures and Algorithms and a pragmatic approach to system design, 
                I strive to build solutions that are not just technically sound, but practically useful.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-gray-800 p-8 h-full bg-[#050505]">
              <h3 className="font-mono text-sm text-gray-500 mb-6 uppercase tracking-widest border-b border-gray-900 pb-4">
                // Technical Focus
              </h3>
              <ul className="space-y-4 font-mono text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-4">01</span>
                  <span>Full-Stack Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-4">02</span>
                  <span>AI/ML Integration & APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-4">03</span>
                  <span>Database Architecture (SQL/NoSQL)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-4">04</span>
                  <span>Cybersecurity & RBAC Implementations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
