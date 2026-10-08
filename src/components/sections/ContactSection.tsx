'use client';

import React, { useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { Button } from '../ui/Button';
import { Mail, GitBranch, Briefcase, MapPin, Send, CheckCircle2, AlertCircle, Code2, Terminal } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage('Message transmitted successfully. I will review your note and respond promptly.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to dispatch message. Please try again or email directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network connection error. Please email directly at anvithkumar511@gmail.com.');
    }
  };

  return (
    <section id="contact" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="./contact --direct" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Get in Touch
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Available for Software Engineering, Full-Stack, AI Engineering, and Security roles. Open to technical collaborations and opportunities.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Let's engineer solutions together.
            </h3>
            
            <p className="text-base text-[var(--muted-foreground)] font-light leading-relaxed">
              Whether you are recruiting for an engineering team, discussing a potential project, or want to explore my work on HelpMate, Time Capsule, or LeetCode, feel free to reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:anvithkumar511@gmail.com"
                className="flex items-center gap-4 p-4 border border-[var(--border-light)] bg-[var(--muted)] hover:border-[var(--foreground)] transition-colors group"
              >
                <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block">Direct Email</span>
                  <span className="font-mono text-sm font-medium text-[var(--foreground)] group-hover:underline">anvithkumar511@gmail.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/anvith-kumar-7313a8220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-[var(--border-light)] bg-[var(--muted)] hover:border-[var(--foreground)] transition-colors group"
              >
                <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <Briefcase size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block">LinkedIn Profile</span>
                  <span className="font-mono text-sm font-medium text-[var(--foreground)] group-hover:underline">linkedin.com/in/anvith-kumar-7313a8220</span>
                </div>
              </a>

              <a
                href="https://github.com/anvith511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-[var(--border-light)] bg-[var(--muted)] hover:border-[var(--foreground)] transition-colors group"
              >
                <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <GitBranch size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block">GitHub Repositories</span>
                  <span className="font-mono text-sm font-medium text-[var(--foreground)] group-hover:underline">github.com/anvith511</span>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/anvithkumar511/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-[var(--border-light)] bg-[var(--muted)] hover:border-[var(--foreground)] transition-colors group"
              >
                <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <Code2 size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block">LeetCode Profile</span>
                  <span className="font-mono text-sm font-medium text-[var(--foreground)] group-hover:underline">leetcode.com/u/anvithkumar511/</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-[var(--border-light)] bg-[var(--background)]">
                <div className="w-10 h-10 border border-[var(--border-light)] bg-[var(--muted)] flex items-center justify-center text-[var(--foreground)]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] block">Base Location</span>
                  <span className="font-mono text-sm font-medium text-[var(--foreground)]">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Dispatch Terminal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-[var(--border-light)] p-8 md:p-12 bg-[var(--muted)] shadow-[6px_6px_0px_var(--border-light)]">
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-[var(--border-light)]">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)]">
                  <Terminal size={14} className="text-[var(--foreground)]" />
                  <span>TRANSMIT_MESSAGE // form payload</span>
                </div>
                <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase">
                  STATUS: READY
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 border border-[var(--foreground)] bg-[var(--background)] text-center space-y-4">
                  <CheckCircle2 size={32} className="mx-auto text-[var(--foreground)]" />
                  <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">Payload Received</h4>
                  <p className="text-sm text-[var(--muted-foreground)] max-w-md mx-auto font-mono">
                    {statusMessage}
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setStatus('idle')}
                    className="mt-4"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 border border-red-500 bg-red-500/5 text-red-600 text-xs font-mono flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-[var(--foreground)]">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="contact-name"
                      className="w-full bg-[var(--background)] border border-[var(--border-light)] p-3 text-[var(--foreground)] focus:border-[var(--foreground)] outline-none font-mono text-sm transition-colors"
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-[var(--foreground)]">
                      Your Email Address
                    </label>
                    <input 
                      type="email" 
                      id="contact-email"
                      className="w-full bg-[var(--background)] border border-[var(--border-light)] p-3 text-[var(--foreground)] focus:border-[var(--foreground)] outline-none font-mono text-sm transition-colors"
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-[var(--foreground)]">
                      Message Payload (min 10 characters)
                    </label>
                    <textarea 
                      id="contact-message"
                      rows={5}
                      className="w-full bg-[var(--background)] border border-[var(--border-light)] p-3 text-[var(--foreground)] focus:border-[var(--foreground)] outline-none font-mono text-sm resize-y transition-colors"
                      placeholder="Hi Anvith, let's discuss an engineering opportunity..."
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      required
                      minLength={10}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>{status === 'loading' ? 'Transmitting...' : 'Transmit Message'}</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
