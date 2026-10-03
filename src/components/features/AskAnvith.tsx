'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { role: 'ai', content: "Hi. I'm ask.anvith. Ask me anything about Anvith's background, projects, or skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages })
      });
      
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', content: "Error communicating with server. I am running in offline mode." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-2 bg-white text-black border border-black font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
      >
        ask.anvith
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white border border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col h-[500px]"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-black bg-black text-white">
              <div className="font-mono text-sm tracking-widest">ask.anvith</div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-300 font-bold">
                [X]
              </button>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-sans"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className="text-xs font-mono text-gray-500 mb-1">{msg.role === 'user' ? 'YOU' : 'AI'}</div>
                  <div className={`px-3 py-2 ${msg.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-black border border-gray-200'} max-w-[85%]`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <div className="text-xs font-mono text-gray-500 mb-1">AI</div>
                  <div className="px-3 py-2 bg-gray-100 text-black border border-gray-200 font-mono text-xs animate-pulse">
                    typing...
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                <div className="text-xs font-mono text-gray-500 mb-2">Suggested</div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.slice(0, 3).map((q, i) => (
                    <button 
                      key={i} 
                      onClick={() => sendMessage(q)}
                      className="text-xs border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <form 
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="border-t border-black p-2 flex"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent outline-none border-none text-black px-2 text-sm"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="bg-black text-white px-4 py-1 text-sm font-bold disabled:opacity-50"
              >
                SEND
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
