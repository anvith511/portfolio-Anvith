import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Projects', value: 6 },
    { label: 'Skills', value: 24 },
    { label: 'Experiences', value: 2 },
    { label: 'Blog Posts', value: 0 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">dashboard_overview</h1>
        <p className="text-[#888]">System status and quick actions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-[#333] bg-[#111] p-6">
            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm text-[#888] uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-[#333] p-6">
          <h2 className="text-xl text-white mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-3">
            <Link href="/admin/projects" className="px-4 py-3 border border-[#333] hover:bg-[#222] transition-colors flex justify-between items-center">
              <span>+ New Project</span>
              <span className="text-[#666]">→</span>
            </Link>
            <Link href="/admin/skills" className="px-4 py-3 border border-[#333] hover:bg-[#222] transition-colors flex justify-between items-center">
              <span>+ New Skill</span>
              <span className="text-[#666]">→</span>
            </Link>
            <Link href="/admin/resume" className="px-4 py-3 border border-[#333] hover:bg-[#222] transition-colors flex justify-between items-center">
              <span>↑ Upload Resume</span>
              <span className="text-[#666]">→</span>
            </Link>
          </div>
        </div>

        <div className="border border-[#333] p-6">
          <h2 className="text-xl text-white mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#222]">
              <span className="text-[#888]">Supabase Connection</span>
              <span className="text-white px-2 py-1 bg-[#222] text-xs">Demo Mode</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#222]">
              <span className="text-[#888]">Last Login</span>
              <span className="text-white text-sm">Just now</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#888]">Version</span>
              <span className="text-white text-sm">1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
