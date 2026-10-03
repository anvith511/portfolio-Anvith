'use client';

import { useState } from 'react';

export default function SkillsAdmin() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">manage_skills</h1>
          <p className="text-[#888]">Organize and update your skill set.</p>
        </div>
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-[#DDD]"
        >
          + ADD SKILL
        </button>
      </div>

      {!isEditing ? (
        <div className="space-y-6">
          <div className="border border-[#333] p-6">
            <h2 className="text-xl text-white mb-4 border-b border-[#333] pb-2">Programming</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#111] border border-[#333] text-sm flex items-center">
                JavaScript 
                <button className="ml-2 text-[#666] hover:text-white">×</button>
              </span>
              <span className="px-3 py-1 bg-[#111] border border-[#333] text-sm flex items-center">
                TypeScript
                <button className="ml-2 text-[#666] hover:text-white">×</button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-[#333] bg-[#0a0a0a] p-8">
          <h2 className="text-2xl text-white mb-6">New Skill</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Skill Name</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
              </div>
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Category</label>
                <select className="w-full bg-[#111] border border-[#333] p-3 text-white">
                  <option>Programming</option>
                  <option>Development</option>
                  <option>Database</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button type="button" className="bg-white text-black px-6 py-2 font-bold hover:bg-[#DDD]" onClick={() => setIsEditing(false)}>SAVE</button>
              <button type="button" className="border border-[#333] text-white px-6 py-2 hover:bg-[#222]" onClick={() => setIsEditing(false)}>CANCEL</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
