'use client';

import React from 'react';
import Link from 'next/link';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// Mock data, replace with actual props or data fetch later
const featuredProjects = [
  {
    id: '01',
    slug: 'helpmate',
    title: 'HelpMate',
    description: 'An AI-powered assistance tool streamlining customer support operations with intelligent routing and response generation.',
    tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
    links: { github: '#', demo: '#' },
    engineeringFocus: 'Problem: High response times. Solution: Intelligent routing using ML. Architecture: Microservices.',
  },
  {
    id: '02',
    slug: 'time-capsule',
    title: 'Time Capsule',
    description: 'A digital artifact storage platform allowing users to seal messages, photos, and files to be unlocked at a future date.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: { github: '#', demo: '#' },
    engineeringFocus: 'Focus on secure, encrypted storage and reliable cron jobs for unlocking artifacts precisely on time.',
  },
  {
    id: '03',
    slug: 'ai-code',
    title: 'AI Code Assistant',
    description: 'A sophisticated VS Code extension that leverages local LLMs to provide real-time code suggestions and refactoring.',
    tags: ['Python', 'FastAPI', 'TypeScript', 'LLMs'],
    links: { github: '#' },
    engineeringFocus: 'Optimized inference latency by 40% through model quantization and efficient caching strategies.',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="ls projects --featured" className="mb-16" />
        </RevealOnScroll>

        <StaggerChildren className="space-y-16">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <Card className="border-gray-800 bg-transparent p-8 md:p-12 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0 pb-6 mb-6 border-b border-gray-900 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-gray-500 text-sm block mb-2">{project.id}</span>
                    <CardTitle className="text-3xl md:text-4xl font-bold">{project.title}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="font-mono">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  <div className="bg-[#111] p-6 rounded-sm border border-gray-900 font-mono text-sm text-gray-400">
                    <span className="text-gray-500 block mb-2"># Behind the Build</span>
                    <p>{project.engineeringFocus}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-8 mt-8 border-t border-gray-900 flex gap-4">
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="primary">Case Study</Button>
                  </Link>
                  {project.links.github && (
                    <Link href={project.links.github}>
                      <Button variant="outline">GitHub</Button>
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link href={project.links.demo}>
                      <Button variant="ghost">Live Demo</Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ProjectsSection;
