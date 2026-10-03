import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Resume | Anvith Kumar' };

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="view resume.pdf" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">Resume</h1>
          <a href="/api/resume" download className="mt-8 md:mt-0 font-mono text-sm border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider inline-flex items-center gap-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download PDF
          </a>
        </div>

        <div className="border border-gray-800 bg-black p-8 md:p-16">
          {/* Document Header */}
          <div className="text-center mb-16 pb-8 border-b border-gray-800">
            <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-4">Anvith Kumar</h2>
            <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-gray-500 uppercase tracking-widest">
              <span>Bengaluru, India</span>
              <span>|</span>
              <span>anvith511@gmail.com</span>
              <span>|</span>
              <span>github.com/anvith511</span>
            </div>
          </div>

          {/* Sections summary */}
          <div className="space-y-16">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-900 pb-2">Education</h3>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-white font-bold text-lg mb-1">New Horizon College of Engineering</div>
                  <div className="text-gray-500 text-sm">B.E. Computer Engineering</div>
                </div>
                <div className="text-right font-mono text-xs text-gray-600 space-y-1">
                  <div>2021 - 2025</div>
                  <div className="text-white border border-gray-800 px-2 py-0.5 inline-block">CGPA: 9.11</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-900 pb-2">Experience</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">MindMatrix.io</div>
                    <div className="text-gray-500 text-sm">AI App Developer Intern</div>
                  </div>
                  <div className="text-right font-mono text-xs text-gray-600">May 2024 - Present</div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">NIIT Foundation | Cisco CSR</div>
                    <div className="text-gray-500 text-sm">Cyber & AI Workforce Intern</div>
                  </div>
                  <div className="text-right font-mono text-xs text-gray-600">Jan 2024 - Mar 2024</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-900 pb-2">Core Skills</h3>
              <div className="font-mono text-sm text-gray-400 leading-relaxed max-w-2xl">
                TypeScript, React, Next.js, Node.js, Python, SQL, MongoDB, Tailwind CSS, AWS, Docker, Git.
              </div>
            </div>
          </div>

          <div className="mt-24 text-center font-mono text-xs text-gray-600 pt-8 border-t border-gray-900">
            [ Last Updated: {new Date().toLocaleDateString()} ]
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
