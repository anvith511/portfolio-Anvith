'use client';

import React from 'react';
import Link from 'next/link';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { FadeIn } from '../animations/FadeIn';
import { TypingAnimation } from '../animations/TypingAnimation';
import { CursorBlink } from '../animations/CursorBlink';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-16 lg:py-0">
      <div className="content-width grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <FadeIn delay={0.2} className="flex flex-col space-y-8">
          <TerminalPrompt command="whoami" />
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
              <TypingAnimation text="ANVITH" />
              <br />
              <span className="text-gray-500">
                <TypingAnimation text="KUMAR_" delay={0.8} />
              </span>
            </h1>
            
            <div className="font-mono text-sm md:text-base text-gray-400 space-y-1">
              <p>&gt; Computer Engineering</p>
              <p>&gt; Software | Data | AI</p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-lg font-light leading-relaxed">
            I build software that solves real problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#projects">
              <Button variant="primary" size="lg">View Projects</Button>
            </Link>
            <Link href="#about">
              <Button variant="outline" size="lg">About Me</Button>
            </Link>
            <Link href="/resume">
              <Button variant="ghost" size="lg">Download Resume</Button>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} className="hidden lg:flex justify-center items-center h-full">
          <div className="font-mono text-xs text-gray-600 whitespace-pre leading-none select-none opacity-50 hover:opacity-80 transition-opacity duration-500">
            {`
       /\\
      /  \\
     /    \\
    /      \\
   /________\\
  /\\        /\\
 /  \\      /  \\
/____\\    /____\\
|    |    |    |
|    |    |    |
|____|    |____|
            `}
            <CursorBlink />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
