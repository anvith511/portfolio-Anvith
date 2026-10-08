'use client';

import React from 'react';
import Link from 'next/link';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { fallbackProjects } from '@/lib/data/fallback';
import { ArrowUpRight, GitBranch, ExternalLink, Cpu, Layers } from 'lucide-react';

export const ProjectsSection = ({ projects = fallbackProjects }: { projects?: any[] }) => {
  return (
    <section id="projects" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <TerminalPrompt command="ls projects/ --featured --detailed" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Featured Projects
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Engineered solutions across mobile systems, encrypted distributed storage, and AI-assisted developer tooling.
            </p>
          </div>
        </RevealOnScroll>

        <StaggerChildren className="space-y-8">
          {projects.map((project, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const techs: string[] = project.technologies || project.tech || [];
            const github = project.github_url || project.githubUrl || 'https://github.com/anvith511';
            const live = project.live_url || project.liveUrl;

            return (
              <StaggerItem key={project.id || project.slug}>
                <Card className="border-[var(--border-light)] bg-[var(--background)] p-6 md:p-10 hover:border-[var(--foreground)] transition-all duration-300 shadow-[4px_4px_0px_var(--border-light)] hover:shadow-[8px_8px_0px_var(--foreground)]">
                  <CardHeader className="p-0 pb-6 mb-6 border-b border-[var(--border-light)] flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[var(--muted-foreground)]">
                        <span className="text-[var(--foreground)] font-bold">{num}</span>
                        <span>/</span>
                        <span className="uppercase tracking-widest">{project.category || 'Engineering Project'}</span>
                      </div>
                      <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
                        {project.title}
                      </CardTitle>
                      <p className="text-base text-[var(--muted-foreground)] font-mono mt-2">
                        {project.short_description || project.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {techs.map(tag => (
                        <Badge key={tag} variant="outline" className="font-mono text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-8">
                    <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed max-w-4xl font-light">
                      {project.full_description || project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {project.problem && (
                        <div className="p-6 bg-[var(--muted)] border border-[var(--border-light)]">
                          <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 flex items-center gap-2">
                            <Layers size={14} className="text-[var(--foreground)]" />
                            <span>Problem Statement</span>
                          </div>
                          <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                            {project.problem}
                          </p>
                        </div>
                      )}

                      {project.solution && (
                        <div className="p-6 bg-[var(--muted)] border border-[var(--border-light)]">
                          <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 flex items-center gap-2">
                            <Cpu size={14} className="text-[var(--foreground)]" />
                            <span>Engineered Solution</span>
                          </div>
                          <p className="text-sm text-[var(--foreground)] leading-relaxed font-sans">
                            {project.solution}
                          </p>
                        </div>
                      )}
                    </div>

                    {project.architecture && (
                      <div className="bg-[var(--muted)] p-6 border border-[var(--border-light)] font-mono text-xs text-[var(--foreground)]">
                        <span className="text-[var(--muted-foreground)] uppercase tracking-wider block mb-2 font-bold">
                          // Behind the Build & Architecture
                        </span>
                        <p className="leading-relaxed font-sans text-sm">
                          {project.architecture}
                        </p>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-0 pt-8 mt-8 border-t border-[var(--border-light)] flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-4">
                      <Link href={`/projects/${project.slug}`}>
                        <Button variant="primary" className="group">
                          <span>Case Study</span>
                          <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </Link>
                      {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="flex items-center gap-2">
                            <GitBranch size={14} />
                            <span>Source Code</span>
                          </Button>
                        </a>
                      )}
                      {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="flex items-center gap-2">
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </Button>
                        </a>
                      )}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors hidden sm:block">
                      Read Technical Deep-Dive &rarr;
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ProjectsSection;
