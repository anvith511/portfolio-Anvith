import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: 'Overview', href: '/admin' },
    { name: 'Projects', href: '/admin/projects' },
    { name: 'Skills', href: '/admin/skills' },
    { name: 'Experience', href: '/admin/experience' },
    { name: 'Education', href: '/admin/education' },
    { name: 'Achievements', href: '/admin/achievements' },
    { name: 'Certifications', href: '/admin/certifications' },
    { name: 'Statistics', href: '/admin/statistics' },
    { name: 'Timeline', href: '/admin/timeline' },
    { name: 'Blog', href: '/admin/blog' },
    { name: 'Resume', href: '/admin/resume' },
    { name: 'Sections', href: '/admin/sections' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#000] text-[#DDD] font-mono flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#333] bg-[#0a0a0a] flex flex-col hidden md:flex">
        <div className="p-6 border-b border-[#333]">
          <h1 className="text-xl font-bold text-white">admin_cms</h1>
          <p className="text-xs text-[#888] mt-1">v1.0.0</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm text-[#AAA] hover:text-white hover:bg-[#222] rounded transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-[#333]">
          <Link href="/login" className="block w-full text-center px-3 py-2 text-sm text-[#888] hover:text-white hover:bg-[#222] rounded transition-colors border border-[#333]">
            [ Logout ]
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[#333] flex items-center justify-between px-6 bg-[#0a0a0a]">
          <div className="text-sm text-[#888]">
            user: admin@anvith.dev
          </div>
          <div>
            <Link href="/" className="text-sm text-white hover:underline">
              View Public Site ↗
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
