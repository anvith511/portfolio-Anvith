'use client';

import React from 'react';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerChildren, StaggerItem } from '../animations/StaggerChildren';
import { Card, CardTitle } from '../ui/Card';

const certs = [
  { title: 'Foundations of Cybersecurity', issuer: 'Google', date: '2023' },
  { title: 'Cloud Computing', issuer: 'IBM', date: '2023' },
  { title: 'Data Analyst 101', issuer: 'Microsoft', date: '2024' },
  { title: 'Introduction to Tableau', issuer: 'Simplilearn', date: '2024' },
];

export const CertificationsSection = () => {
  return (
    <section className="section-padding">
      <div className="content-width">
        <RevealOnScroll>
          <TerminalPrompt command="ls certifications/" className="mb-16" />
        </RevealOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <StaggerItem key={index}>
              <Card className="border-gray-900 bg-transparent flex flex-col md:flex-row justify-between items-start md:items-center p-6 hover:bg-[#0a0a0a] transition-colors">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-medium">{cert.title}</CardTitle>
                  <p className="font-mono text-sm text-gray-500">{cert.issuer}</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-xs text-gray-600 border border-gray-800 px-3 py-1">
                  {cert.date}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default CertificationsSection;
