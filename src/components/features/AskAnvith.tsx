'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, X, Sparkles } from 'lucide-react';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What projects has Anvith built?",
  "What technologies does he know?",
  "Tell me about HelpMate.",
  "What is his experience at MindMatrix?",
  "What is his LeetCode record?"
];

export default function AskAnvith() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm ask.anvith. Ask me anything about Anvith's background, projects, engineering stack, or credentials." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history: messages })
      });
      
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'ai', content: data.reply || "No reply received." }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', content: "I am running with offline fallback data. Anvith is a Computer Engineering graduate (NHCE, CGPA 9.11) specializing in Software Engineering, AI, and Cybersecurity." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-[990] px-4 py-2.5 bg-[var(--foreground)] text-[var(--background)] border border-[var(--foreground)] font-mono text-xs uppercase tracking-widest font-bold shadow-[4px_4px_0px_var(--border-light)] hover:opacity-90 transition-all cursor-pointer flex items-center gap-2"
        aria-label="Toggle Ask Anvith AI Assistant"
      >
        <Sparkles size={14} />
        <span>ask.anvith</span>
      </button>

      {/* Chat modal window */}
      {isOpen && (
        <div
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-[999] w-[calc(100vw-2rem)] sm:w-96 bg-[var(--background)] text-[var(--foreground)] border-2 border-[var(--foreground)] shadow-[8px_8px_0px_var(--foreground)] flex flex-col h-[520px] max-h-[80vh]"
          role="dialog"
          aria-label="Ask Anvith Assistant"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
              <Terminal size={14} />
              <span>ask.anvith // AI Agent</span>
            </div>
            <button 
              type="button"
              onClick={() => setIsOpen(false)} 
              className="p-1 hover:opacity-75 font-mono text-xs font-bold cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Messages list */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans bg-[var(--background)]"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="text-[10px] font-mono text-[var(--muted-foreground)] mb-1">
                  {msg.role === 'user' ? 'YOU' : 'ANVITH_AI'}
                </div>
                <div 
                  className={`px-3 py-2 leading-relaxed max-w-[85%] border ${
                    msg.role === 'user' 
                      ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]' 
                      : 'bg-[var(--muted)] text-[var(--foreground)] border-[var(--border-light)]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="text-[10px] font-mono text-[var(--muted-foreground)] mb-1">ANVITH_AI</div>
                <div className="px-3 py-2 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border-light)] font-mono text-xs animate-pulse">
                  processing query...
                </div>
              </div>
            )}
          </div>

          {/* Quick prompts */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-[var(--border-light)] bg-[var(--muted)]">
              <div className="text-[10px] font-mono text-[var(--muted-foreground)] mb-1.5 uppercase tracking-wider">Suggested Questions</div>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q, i) => (
                  <button 
                    key={i} 
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="text-[10px] font-mono border border-[var(--border-light)] bg-[var(--background)] text-[var(--foreground)] px-2 py-1 hover:border-[var(--foreground)] transition-colors text-left cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="border-t border-[var(--border-light)] p-2.5 flex items-center gap-2 bg-[var(--background)]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, stack, education..."
              className="flex-1 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border-light)] px-3 py-2 text-xs font-mono outline-none focus:border-[var(--foreground)] transition-colors"
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              className="bg-[var(--foreground)] text-[var(--background)] px-3.5 py-2 text-xs font-mono font-bold uppercase disabled:opacity-50 hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1"
            >
              <Send size={12} />
              <span>Send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
