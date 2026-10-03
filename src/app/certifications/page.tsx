import { getCertifications } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';

export const metadata = { title: 'Certifications | Anvith Kumar' };

export default async function CertificationsPage() {
  const certs = await getCertifications();

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="ls -l /certifications" />
        <h1 className="text-5xl md:text-7xl font-bold mb-16 uppercase tracking-tighter mt-8 text-white">Certifications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert: any, i: number) => (
            <div key={i} className="border border-gray-800 p-8 flex flex-col h-full hover:border-gray-500 transition-colors bg-black">
              <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">{cert.issuer}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{cert.title}</h3>
              <div className="mt-auto pt-8 flex items-center justify-between font-mono text-sm border-t border-gray-900">
                <span className="text-gray-500">{cert.date}</span>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-4 tracking-wider uppercase">
                    Verify &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
