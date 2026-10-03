'use client';

import { useState } from 'react';

export default function CertificationsAdmin() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">manage_certs</h1>
        </div>
        <button onClick={() => setIsEditing(true)} className="bg-white text-black px-4 py-2 font-bold hover:bg-[#DDD]">
          + ADD CERT
        </button>
      </div>

      {!isEditing ? (
        <div className="space-y-4">
          <div className="border border-[#333] bg-[#111] p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl text-white font-bold">AWS Certified Cloud Practitioner</h3>
              <p className="text-[#888]">Amazon Web Services</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-[#333] hover:bg-[#222] text-sm">[ Edit ]</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-[#333] bg-[#0a0a0a] p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">Name</label>
              <input type="text" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
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
