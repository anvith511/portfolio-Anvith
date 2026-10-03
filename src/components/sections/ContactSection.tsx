'use client';

import React, { useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { Button } from '../ui/Button';

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, integrate with Formspree or an API route
    console.log('Form submitted:', formState);
    alert('Message sending functionality would be implemented here.');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="./contact" className="mb-16" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's build something together.</h2>
            
            <div className="space-y-6 font-mono text-sm text-gray-400">
              <div>
                <span className="text-gray-600 block mb-1">EMAIL</span>
                <a href="mailto:contact@anvith.dev" className="text-white hover:underline">contact@anvith.dev</a>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">LINKEDIN</span>
                <a href="#" className="text-white hover:underline">linkedin.com/in/anvith-kumar</a>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">GITHUB</span>
                <a href="https://github.com/anvith511" className="text-white hover:underline">github.com/anvith511</a>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">LOCATION</span>
                <span className="text-gray-300">Bengaluru, India</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-gray-900 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs text-gray-500 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-white outline-none font-mono text-sm transition-colors"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs text-gray-500 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-white outline-none font-mono text-sm transition-colors"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-gray-500 uppercase">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-white outline-none font-mono text-sm resize-none transition-colors"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Execute Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
