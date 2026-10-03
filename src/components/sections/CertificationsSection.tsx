'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardTitle } from '../ui/Card';
import { ShieldCheck, Cloud, Database, BarChart3, ExternalLink } from 'lucide-react';

const certsList = [
  { 
    title: 'Foundations of Cybersecurity', 
    issuer: 'Google', 
    date: '2023',
    icon: ShieldCheck,
    focus: 'Threat Modeling, Network Defense, Security Operations & Vulnerability Assessment'
  },
  { 
    title: 'Cloud Computing Fundamentals', 
    issuer: 'IBM', 
    date: '2023',
    icon: Cloud,
    focus: 'Distributed Systems, Cloud Architecture, IaaS/PaaS/SaaS Models & Virtualization'
  },
  { 
    title: 'Data Analyst 101', 
    issuer: 'Microsoft', 
    date: '2024',
    icon: Database,
    focus: 'Data Pipelines, Relational Query Analysis, Data Modeling & ETL Fundamentals'
  },
  { 
    title: 'Introduction to Tableau', 
    issuer: 'Simplilearn', 
    date: '2024',
    icon: BarChart3,
    focus: 'Data Visualization, Business Intelligence, Dashboards & Metric Tracking'
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding border-b border-[var(--border-light)]">
      <div className="content-width">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <TerminalPrompt command="ls certifications/ --verified" className="mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[var(--foreground)]">
                Certifications
              </h2>
            </div>
            <p className="font-mono text-sm text-[var(--muted-foreground)] max-w-md">
              Industry credentials validating cybersecurity fundamentals, cloud systems, and data analytics competencies.
            </p>
          </div>
        </RevealOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certsList.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <StaggerItem key={index}>
                <Card className="border-[var(--border-light)] bg-[var(--background)] p-8 hover:border-[var(--foreground)] transition-all duration-300 shadow-[4px_4px_0px_var(--border-light)] hover:shadow-[6px_6px_0px_var(--foreground)] flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--border-light)]">
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} className="text-[var(--foreground)]" />
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--foreground)] font-bold">
                          {cert.issuer}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border-light)] bg-[var(--muted)]">
                        {cert.date}
                      </span>
                    </div>

                    <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-[var(--foreground)]">
                      {cert.title}
                    </CardTitle>

                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed font-sans pt-1">
                      {cert.focus}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-light)] flex items-center justify-between font-mono text-[11px] text-[var(--muted-foreground)]">
                    <span>CREDENTIAL_VERIFIED</span>
                    <span className="flex items-center gap-1 text-[var(--foreground)]">
                      <span>Accredited</span>
                      <ExternalLink size={10} />
                    </span>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default CertificationsSection;
