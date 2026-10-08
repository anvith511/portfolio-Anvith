'use client';

import React, { useState } from 'react';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { personalData } from '@/data/personal';
import { ArrowLeft, Mail, GitBranch, Briefcase, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
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
        setStatusMessage('Message transmitted successfully. I will review and respond promptly.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to dispatch message. Please try again or email directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage(`Network error. Please email directly at ${personalData.email}`);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 min-h-[85vh]">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border border-[var(--border-light)] px-3 py-1.5 bg-[var(--muted)]"
          >
            <ArrowLeft size={14} />
            <span>cd .. (Back to Home)</span>
          </Link>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">CONTACT // DIRECT</span>
        </div>

        <TerminalPrompt command="./contact --direct" />
        <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter mt-6 text-[var(--foreground)]">
          Get in Touch
        </h1>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-16 max-w-2xl leading-relaxed font-mono">
          Available for Software Engineering, Full-Stack, AI Engineering, and Security roles. Open to technical collaborations and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-8 border-b border-[var(--border-light)] pb-4 uppercase tracking-wider font-mono">
              Direct Transmission
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-[var(--muted-foreground)] uppercase mb-2 tracking-widest font-bold">
                  Name
                </label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Recruiter or Engineer Name"
                  className="w-full bg-[var(--background)] border border-[var(--border-light)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors text-sm font-sans" 
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--muted-foreground)] uppercase mb-2 tracking-widest font-bold">
                  Email
                </label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="contact@company.com"
                  className="w-full bg-[var(--background)] border border-[var(--border-light)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors text-sm font-sans" 
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--muted-foreground)] uppercase mb-2 tracking-widest font-bold">
                  Message
                </label>
                <textarea 
                  rows={5} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Role details, project collaboration, or interview invitation..."
                  className="w-full bg-[var(--background)] border border-[var(--border-light)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none text-sm font-sans"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 border border-emerald-500 bg-emerald-500/10 text-emerald-500 text-xs font-mono">
                  <CheckCircle2 size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 border border-rose-500 bg-rose-500/10 text-rose-500 text-xs font-mono">
                  <AlertCircle size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="font-mono text-xs uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] px-6 py-3.5 hover:opacity-90 transition-opacity font-bold flex items-center justify-center gap-2 w-full cursor-pointer disabled:opacity-50"
              >
                <Send size={14} />
                <span>{status === 'loading' ? 'Transmitting...' : 'Transmit Message'}</span>
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-8 border-b border-[var(--border-light)] pb-4 uppercase tracking-wider font-mono">
              Channels
            </h2>
            <ul className="space-y-6 font-mono text-xs">
              <li className="p-4 border border-[var(--border-light)] bg-[var(--muted)] flex items-center gap-4">
                <div className="w-9 h-9 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)] uppercase tracking-widest block text-[10px]">Email</span>
                  <a href={personalData.socials.email} className="text-[var(--foreground)] hover:underline font-bold text-sm">
                    {personalData.email}
                  </a>
                </div>
              </li>

              <li className="p-4 border border-[var(--border-light)] bg-[var(--muted)] flex items-center gap-4">
                <div className="w-9 h-9 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <GitBranch size={16} />
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)] uppercase tracking-widest block text-[10px]">GitHub</span>
                  <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:underline font-bold text-sm">
                    github.com/anvith511
                  </a>
                </div>
              </li>

              <li className="p-4 border border-[var(--border-light)] bg-[var(--muted)] flex items-center gap-4">
                <div className="w-9 h-9 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <Briefcase size={16} />
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)] uppercase tracking-widest block text-[10px]">LinkedIn</span>
                  <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:underline font-bold text-sm">
                    linkedin.com/in/anvith-kumar
                  </a>
                </div>
              </li>

              <li className="p-4 border border-[var(--border-light)] bg-[var(--muted)] flex items-center gap-4">
                <div className="w-9 h-9 border border-[var(--border-light)] bg-[var(--background)] flex items-center justify-center text-[var(--foreground)]">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)] uppercase tracking-widest block text-[10px]">Location</span>
                  <span className="text-[var(--foreground)] font-bold text-sm">{personalData.location}</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-6 border border-[var(--border-light)] bg-[var(--muted)] text-[var(--muted-foreground)] font-mono text-xs leading-relaxed">
              <div className="mb-2 text-[var(--foreground)] font-bold">STATUS // READY_FOR_DEPLOYMENT</div>
              <div>Standard recruiter response turnaround time is within 24 hours. Open to immediate technical evaluations and interviews.</div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
