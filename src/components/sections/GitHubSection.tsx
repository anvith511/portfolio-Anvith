'use client';

import React, { useEffect, useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { TerminalWindow } from '../terminal/TerminalWindow';

export const GitHubSection = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a server component or an API route call to avoid rate limits
    const fetchGithub = async () => {
      try {
        const res = await fetch('https://api.github.com/users/anvith511');
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch (error) {
        console.error('Failed to fetch github data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithub();
  }, []);

  return (
    <section className="section-padding bg-[#050505]">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="curl api.github.com/users/anvith511" className="mb-16" />
        </RevealOnScroll>

        <TerminalWindow title="github_api_response.json">
          {loading ? (
            <div className="text-gray-500 animate-pulse">Fetching data...</div>
          ) : profile ? (
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "login": "${profile.login}",
  "name": "${profile.name || 'Anvith Kumar'}",
  "bio": "${profile.bio || 'Software Engineer'}",
  "public_repos": ${profile.public_repos},
  "followers": ${profile.followers},
  "html_url": "${profile.html_url}",
  "status": "200 OK"
}`}
            </pre>
          ) : (
            <pre className="text-gray-300 text-sm">
{`{
  "login": "anvith511",
  "name": "Anvith Kumar",
  "bio": "Software Engineer",
  "html_url": "https://github.com/anvith511",
  "note": "API Rate limit exceeded. Using fallback data."
}`}
            </pre>
          )}
        </TerminalWindow>
      </div>
    </section>
  );
};

export default GitHubSection;
