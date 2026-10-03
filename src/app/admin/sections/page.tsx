'use client';

import { useState } from 'react';

export default function SectionsAdmin() {
  const [sections, setSections] = useState([
    { id: 'hero', name: 'Hero', enabled: true },
    { id: 'about', name: 'About', enabled: true },
    { id: 'stats', name: 'Stats', enabled: true },
    { id: 'projects', name: 'Projects', enabled: true },
    { id: 'experience', name: 'Experience', enabled: true },
    { id: 'skills', name: 'Skills', enabled: true },
    { id: 'timeline', name: 'Timeline', enabled: true },
    { id: 'achievements', name: 'Achievements', enabled: true },
    { id: 'certifications', name: 'Certifications', enabled: true },
    { id: 'github', name: 'GitHub', enabled: true },
    { id: 'blog', name: 'Blog', enabled: false },
    { id: 'contact', name: 'Contact', enabled: true },
  ]);

  const toggleSection = (id: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">manage_sections</h1>
        <p className="text-[#888]">Enable, disable, and reorder homepage sections.</p>
      </div>

      <div className="space-y-2">
        {sections.map((section, index) => (
          <div key={section.id} className="border border-[#333] bg-[#111] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-[#666] cursor-move">↕</span>
              <span className={`text-lg ${section.enabled ? 'text-white' : 'text-[#666]'}`}>
                {index + 1}. {section.name}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => toggleSection(section.id)}
                className={`px-3 py-1 border text-sm ${section.enabled ? 'border-green-900 bg-green-900/20 text-green-500' : 'border-red-900 bg-red-900/20 text-red-500'}`}
              >
                {section.enabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
