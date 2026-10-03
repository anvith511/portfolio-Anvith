'use client';

import { useState } from 'react';

export default function StatisticsAdmin() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">manage_stats</h1>
        </div>
        <button onClick={() => setIsEditing(true)} className="bg-white text-black px-4 py-2 font-bold hover:bg-[#DDD]">
          + ADD STAT
        </button>
      </div>

      {!isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#333] bg-[#111] p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-white font-bold">370+</h3>
              <p className="text-[#888]">LeetCode Problems</p>
            </div>
            <button className="px-3 py-1 border border-[#333] hover:bg-[#222] text-sm">[ Edit ]</button>
          </div>
          <div className="border border-[#333] bg-[#111] p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl text-white font-bold">9.11</h3>
              <p className="text-[#888]">CGPA</p>
            </div>
            <button className="px-3 py-1 border border-[#333] hover:bg-[#222] text-sm">[ Edit ]</button>
          </div>
        </div>
      ) : (
        <div className="border border-[#333] bg-[#0a0a0a] p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Value</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" placeholder="e.g., 370+" />
              </div>
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Label</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" placeholder="e.g., LeetCode Problems" />
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
