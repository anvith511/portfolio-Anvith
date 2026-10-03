'use client';

import { useState } from 'react';

export default function ProjectsAdmin() {
  const [isEditing, setIsEditing] = useState(false);

  const [projects] = useState([
    { id: 1, title: 'HelpMate', category: 'Full Stack', published: true, order: 1 },
    { id: 2, title: 'E-commerce', category: 'Frontend', published: true, order: 2 },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">manage_projects</h1>
          <p className="text-[#888]">Add, edit, or remove projects.</p>
        </div>
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-white text-black px-4 py-2 font-bold hover:bg-[#DDD]"
        >
          + ADD PROJECT
        </button>
      </div>

      {!isEditing ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-[#333] bg-[#111] p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl text-white mb-1">{project.title}</h3>
                <div className="text-sm text-[#888]">
                  Status: {project.published ? 'Published' : 'Draft'} | Order: {project.order}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-[#333] hover:bg-[#222] text-sm">[ Edit ]</button>
                <button className="px-3 py-1 border border-[#333] hover:bg-[#222] text-sm text-[#AAA]">[ Delete ]</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-[#333] bg-[#0a0a0a] p-8">
          <h2 className="text-2xl text-white mb-6">New Project</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Title</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
              </div>
              <div>
                <label className="block text-xs uppercase text-[#888] mb-2">Category</label>
                <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">Short Description</label>
              <textarea className="w-full bg-[#111] border border-[#333] p-3 text-white h-24"></textarea>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button 
                type="button"
                className="bg-white text-black px-6 py-2 font-bold hover:bg-[#DDD]"
                onClick={() => setIsEditing(false)}
              >
                SAVE
              </button>
              <button 
                type="button"
                className="border border-[#333] text-white px-6 py-2 hover:bg-[#222]"
                onClick={() => setIsEditing(false)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
