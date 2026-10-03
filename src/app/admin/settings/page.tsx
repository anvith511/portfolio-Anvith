'use client';

export default function SettingsAdmin() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">site_settings</h1>
        <p className="text-[#888]">Global configuration and preferences.</p>
      </div>

      <div className="border border-[#333] bg-[#0a0a0a] p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">Site Title</label>
              <input type="text" defaultValue="Anvith Kumar | Portfolio" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">Custom Domain</label>
              <input type="text" defaultValue="anvith.dev" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs uppercase text-[#888] mb-2">Site Description</label>
              <textarea defaultValue="Full-Stack Developer portfolio..." className="w-full bg-[#111] border border-[#333] p-3 text-white h-24"></textarea>
            </div>
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">GitHub URL</label>
              <input type="text" defaultValue="https://github.com/anvith" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-[#888] mb-2">Analytics ID</label>
              <input type="text" placeholder="G-XXXXXXXXXX" className="w-full bg-[#111] border border-[#333] p-3 text-white" />
            </div>
          </div>
          
          <div className="pt-6 border-t border-[#333]">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="form-checkbox bg-[#111] border-[#333] text-white w-5 h-5" />
              <span className="text-white">Enable Maintenance Mode</span>
            </label>
            <p className="text-xs text-[#888] mt-1 ml-8">When enabled, public site shows a coming soon page.</p>
          </div>
          
          <div className="pt-4">
            <button type="button" className="bg-white text-black px-6 py-2 font-bold hover:bg-[#DDD]">
              SAVE SETTINGS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
