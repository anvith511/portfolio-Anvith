'use client';

import { useState } from 'react';

export default function BlogAdmin() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">manage_blog</h1>
          <p className="text-[#888]">Write and publish articles.</p>
        </div>
        <button onClick={() => setIsEditing(true)} className="bg-white text-black px-4 py-2 font-bold hover:bg-[#DDD]">
          + NEW POST
        </button>
      </div>

      {!isEditing ? (
        <div className="space-y-4">
          <div className="border border-[#333] bg-[#111] p-6 text-center text-[#888]">
            No blog posts found. Create your first post!
          </div>
        </div>
      ) : (
        <div className="border border-[#333] bg-[#0a0a0a] p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-xs uppercase text-[#888] mb-2">Title</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs uppercase text-[#888] mb-2">Excerpt</label>
                <textarea className="w-full bg-[#111] border border-[#333] p-3 text-white h-20"></textarea>
              </div>
              <div className="col-span-2">
                <label className="block text-xs uppercase text-[#888] mb-2">Content (Markdown)</label>
                <textarea className="w-full bg-[#111] border border-[#333] p-3 text-white h-64 font-mono"></textarea>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <button type="button" className="bg-white text-black px-6 py-2 font-bold hover:bg-[#DDD]" onClick={() => setIsEditing(false)}>PUBLISH</button>
              <button type="button" className="border border-[#333] text-white px-6 py-2 hover:bg-[#222]" onClick={() => setIsEditing(false)}>CANCEL</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
