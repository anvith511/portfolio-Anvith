import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Contact | Anvith Kumar' };

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="./contact" />
        <h1 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter mt-8 text-white">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4 uppercase tracking-wider">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-500 uppercase mb-2 tracking-widest">Name</label>
                <input type="text" className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gray-400 transition-colors rounded-none" />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-500 uppercase mb-2 tracking-widest">Email</label>
                <input type="email" className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gray-400 transition-colors rounded-none" />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-500 uppercase mb-2 tracking-widest">Message</label>
                <textarea rows={5} className="w-full bg-black border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gray-400 transition-colors resize-none rounded-none"></textarea>
              </div>
              <button type="submit" className="font-mono text-sm uppercase tracking-widest bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors w-full md:w-auto">
                Transmit Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4 uppercase tracking-wider">Presence</h2>
            <ul className="space-y-8 font-mono text-sm">
              <li className="flex flex-col gap-2">
                <span className="text-gray-600 uppercase tracking-widest text-xs">Email</span>
                <a href="mailto:anvith511@gmail.com" className="text-white hover:underline underline-offset-4 text-base">anvith511@gmail.com</a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-gray-600 uppercase tracking-widest text-xs">GitHub</span>
                <a href="https://github.com/anvith511" target="_blank" rel="noopener noreferrer" className="text-white hover:underline underline-offset-4 text-base">github.com/anvith511</a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-gray-600 uppercase tracking-widest text-xs">LinkedIn</span>
                <a href="https://linkedin.com/in/anvith-kumar" target="_blank" rel="noopener noreferrer" className="text-white hover:underline underline-offset-4 text-base">linkedin.com/in/anvith-kumar</a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-gray-600 uppercase tracking-widest text-xs">Location</span>
                <span className="text-white text-base">Bengaluru, India</span>
              </li>
            </ul>

            <div className="mt-16 p-6 border border-gray-800 bg-black text-gray-500 font-mono text-xs leading-relaxed">
              <div className="mb-2 text-white">-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
              <div>Security communication preferred for sensitive matters. Standard turnaround time is 24-48 hours.</div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
