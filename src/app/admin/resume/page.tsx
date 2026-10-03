'use client';

export default function ResumeAdmin() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">manage_resume</h1>
        <p className="text-[#888]">Upload and manage your resume PDF.</p>
      </div>

      <div className="border border-[#333] bg-[#0a0a0a] p-8 text-center border-dashed">
        <div className="mb-4">
          <span className="text-4xl">📄</span>
        </div>
        <h3 className="text-xl text-white mb-2">Upload New Resume</h3>
        <p className="text-[#888] text-sm mb-6">Drag and drop or click to select a PDF file</p>
        
        <label className="cursor-pointer bg-white text-black px-6 py-3 font-bold hover:bg-[#DDD] inline-block">
          SELECT FILE
          <input type="file" className="hidden" accept=".pdf" />
        </label>
      </div>

      <div className="mt-8">
        <h3 className="text-xl text-white mb-4">Current Resume</h3>
        <div className="border border-[#333] bg-[#111] p-6 flex justify-between items-center">
          <div>
            <h4 className="text-white font-bold">anvith_kumar_resume_2024.pdf</h4>
            <p className="text-sm text-[#888]">Uploaded on Sep 30, 2026 • 1.2 MB</p>
          </div>
          <button className="px-4 py-2 border border-[#333] hover:bg-[#222] text-sm text-white">
            [ Download ]
          </button>
        </div>
      </div>
    </div>
  );
}
