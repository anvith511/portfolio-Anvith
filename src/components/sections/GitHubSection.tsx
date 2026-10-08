'use client';

import React, { useEffect, useState } from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { TerminalWindow } from '../terminal/TerminalWindow';
import { GitBranch, GitFork, Star, ExternalLink, Code2 } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

interface GitHubData {
  user: {
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    avatar_url: string;
    html_url: string;
  };
  repos: GitHubRepo[];
}

export const GitHubSection = () => {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('/api/github');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error('Failed to fetch github data from proxy route', error);
      }
    };
    fetchGitHubData();
  }, []);

  const user = data?.user || {
    login: 'anvith511',
    name: 'Anvith Kumar',
    bio: 'Computer Engineering | Software | Data | AI',
    public_repos: 12,
    followers: 15,
    html_url: 'https://github.com/anvith511'
  };

  const repos: GitHubRepo[] = data?.repos && data.repos.length > 0 ? data.repos : [
    {
      name: 'HelpMate',
      description: 'Community volunteer coordination platform with proximity-based geospatial matching.',
      language: 'TypeScript',
      stargazers_count: 4,
      forks_count: 1,
      html_url: 'https://github.com/anvith511'
    },
    {
      name: 'Time-Capsule',
      description: 'Encrypted media storage application featuring AES-256 client-side encryption and scheduled unlocks.',
      language: 'JavaScript',
      stargazers_count: 3,
      forks_count: 0,
      html_url: 'https://github.com/anvith511'
    },
    {
      name: 'AI-Code-Review',
      description: 'AI-powered browser extension providing real-time code reviews and vulnerability scans.',
      language: 'Python',
      stargazers_count: 5,
      forks_count: 2,
      html_url: 'https://github.com/anvith511'
    }
  ];

  return (
    <section id="github" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="gh repo list anvith511 --limit 6" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Open Source & Repositories
              </h2>
            </div>
            <a
              href="https://github.com/anvith511"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--foreground)] hover:underline flex items-center gap-2 border border-[var(--border-light)] px-4 py-2 bg-[var(--muted)]"
            >
              <GitBranch size={14} />
              <span>github.com/{user.login}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </RevealOnScroll>

        {/* Profile Card & Terminal Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-4 border border-[var(--border-light)] p-8 bg-[var(--muted)] shadow-[4px_4px_0px_var(--border-light)]">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[var(--border-light)]">
              <GitBranch size={24} className="text-[var(--foreground)]" />
              <div>
                <h3 className="font-mono text-base font-bold text-[var(--foreground)]">{user.name}</h3>
                <span className="font-mono text-xs text-[var(--muted-foreground)]">@{user.login}</span>
              </div>
            </div>

            <p className="text-xs text-[var(--foreground)] leading-relaxed mb-6 font-sans">
              {user.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs border-t border-[var(--border-light)] pt-4">
              <div>
                <span className="text-[var(--muted-foreground)] block text-[10px] uppercase">Public Repos</span>
                <span className="text-lg font-bold text-[var(--foreground)]">{user.public_repos}</span>
              </div>
              <div>
                <span className="text-[var(--muted-foreground)] block text-[10px] uppercase">Profile Status</span>
                <span className="text-xs font-bold text-[var(--foreground)]">Active</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <TerminalWindow title={`api.github.com/users/${user.login}/repos`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-light)] text-xs text-[var(--muted-foreground)]">
                  <span>REPOSITORY</span>
                  <span>METRICS</span>
                </div>
                {repos.map((repo, i) => (
                  <a
                    key={i}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-transparent hover:border-[var(--border-light)] hover:bg-[var(--muted)] transition-colors group"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-sm text-[var(--foreground)] group-hover:underline flex items-center gap-2">
                        <Code2 size={14} className="text-[var(--muted-foreground)]" />
                        <span>{repo.name}</span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] font-sans line-clamp-1">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-2 sm:mt-0 font-mono text-xs text-[var(--muted-foreground)] shrink-0">
                      <span className="text-[var(--foreground)]">{repo.language}</span>
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
