'use client';

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useRecruiterMode } from '@/hooks/useRecruiterMode';

type CommandRecord = {
  command: string;
  output: React.ReactNode;
};

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { toggleRecruiterMode } = useRecruiterMode();
  const [history, setHistory] = useState<CommandRecord[]>([
    { command: '', output: 'anvith@portfolio:~$ system --init' },
    { command: '', output: 'Type "help" for a list of available commands.' }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === 'k')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    let output: React.ReactNode = '';
    const commandsList = ['help', 'whoami', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'certifications', 'stats', 'resume', 'github', 'contact', 'clear', 'theme', 'recruiter', 'sudo hire anvith', 'coffee', 'ls', 'cat resume.pdf'];

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-xs font-mono text-gray-400">
            {commandsList.map(c => <div key={c}>$ {c}</div>)}
          </div>
        );
        break;
      case 'whoami':
        output = 'Anvith Kumar | Computer Engineering Graduate (NHCE, CGPA 9.11) | Software | Data | AI | Security.';
        break;
      case 'about':
      case 'skills':
      case 'projects':
      case 'experience':
      case 'journey':
      case 'achievements':
      case 'certifications':
      case 'stats':
      case 'contact':
        output = `Navigating to ${trimmedCmd}...`;
        const targetId = trimmedCmd === 'journey' ? 'journey' : trimmedCmd;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        } else {
          output = `Section '${trimmedCmd}' not found on this page.`;
        }
        break;
      case 'education':
        output = 'New Horizon College of Engineering (NHCE), B.E. in Computer Engineering (2022-2026). CGPA: 9.11/10.';
        break;
      case 'achievements':
        output = '370+ LeetCode problems, 100-day streak badge, State-level athletics / handball, VTU Handball Nationals representative.';
        break;
      case 'certifications':
        output = 'Google Foundations of Cybersecurity, IBM Cloud Computing, Microsoft Data Analyst 101, Simplilearn Tableau.';
        break;
      case 'stats':
        output = 'LeetCode: 370+ Solved | Major Projects: 6+ | Internships: 2 | CGPA: 9.11';
        break;
      case 'resume':
      case 'cat resume.pdf':
        output = 'Navigating to verified resume view...';
        window.location.href = '/resume';
        break;
      case 'github':
        output = 'Navigating to github.com/anvith511...';
        window.location.href = 'https://github.com/anvith511';
        break;
      case 'linkedin':
        output = 'Navigating to LinkedIn profile...';
        window.location.href = 'https://linkedin.com/in/anvith-kumar-7313a8220';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'theme':
        toggleTheme();
        output = `Toggled monochrome theme. Switched to ${theme === 'light' ? 'dark' : 'light'} mode.`;
        break;
      case 'recruiter':
        toggleRecruiterMode();
        setIsOpen(false);
        output = 'Recruiter Mode toggled.';
        break;
      case 'sudo hire anvith':
        output = <span className="font-bold text-white">permission granted. Offer letter pending... Welcome aboard!</span>;
        break;
      case 'coffee':
        output = 'coffee.service started successfully. [OK] Caffeine level: 100%';
        break;
      case 'ls':
        output = 'about/  projects/  skills/  experience/  resume.pdf  contact/';
        break;
      default:
        output = `command not found: '${trimmedCmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const cmds = history.filter(h => h.command !== '');
      if (cmds.length > 0) {
        const newIndex = historyIndex === -1 ? cmds.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmds[newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const cmds = history.filter(h => h.command !== '');
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmds.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(cmds[newIndex].command);
        }
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-2 bg-black text-white border border-gray-800 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
      >
        [ _terminal ]
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-6 z-50 w-[90vw] max-w-2xl bg-black border border-gray-800 shadow-2xl flex flex-col font-mono text-sm h-[60vh] max-h-[500px]"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-[#0a0a0a]">
              <span className="text-gray-400">~/anvith-portfolio</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
                [X]
              </button>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 text-gray-300"
            >
              {history.map((item, i) => (
                <div key={i}>
                  {item.command && (
                    <div className="flex">
                      <span className="text-white mr-2">anvith@portfolio:~$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="mt-1">{item.output}</div>
                </div>
              ))}
              
              <div className="flex mt-2">
                <span className="text-white mr-2">anvith@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-white caret-white"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
