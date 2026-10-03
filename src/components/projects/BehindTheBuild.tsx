'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BuildDetail = {
  challenge: string;
  decision: string;
  rationale: string;
};

type BehindTheBuildProps = {
  title?: string;
  details?: BuildDetail[];
  data?: any;
};

export default function BehindTheBuild({ title = "Behind the Build", details, data }: BehindTheBuildProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  let items: BuildDetail[] = [];
  if (Array.isArray(details) && details.length > 0) {
    items = details;
  } else if (Array.isArray(data) && data.length > 0) {
    items = data;
  } else if (typeof data === 'string') {
    items = [
      {
        challenge: 'Key Engineering Challenge',
        decision: 'Technical Implementation & Optimization',
        rationale: data,
      },
    ];
  } else {
    items = [
      {
        challenge: 'Scale and Reliability',
        decision: 'Modular architecture with resilient fallbacks',
        rationale: 'Guarantees smooth performance and uptime even under degraded external conditions.',
      },
    ];
  }

  return (
    <div className="border border-black bg-white">
      <div className="bg-black text-white px-4 py-2 font-mono text-sm uppercase tracking-widest flex justify-between items-center">
        <span>{title}</span>
        <span>{'// ENGINEERING'}</span>
      </div>
      
      <div className="divide-y divide-gray-200">
        {items.map((detail, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-sm">CHALLENGE: {detail.challenge}</span>
              <span className="font-mono text-lg">{openIndex === index ? '-' : '+'}</span>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 pt-1"
                >
                  <div className="pl-4 ml-2 border-l-2 border-black space-y-3 mt-2">
                    <div>
                      <span className="text-xs font-mono text-gray-500 block mb-1">DECISION</span>
                      <p className="text-sm font-medium">{detail.decision}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-500 block mb-1">RATIONALE</span>
                      <p className="text-sm text-gray-600">{detail.rationale}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
