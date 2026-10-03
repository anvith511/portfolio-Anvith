'use client';

import React, { useState } from 'react';

type Node = {
  id: string;
  label: string;
  type: 'frontend' | 'backend' | 'database' | 'service';
  x: number;
  y: number;
  details: string;
};

type Edge = {
  source: string;
  target: string;
  label: string;
};

type ArchitectureViewerProps = {
  nodes?: Node[];
  edges?: Edge[];
  data?: any;
};

export default function ArchitectureViewer({ nodes: propNodes, edges: propEdges, data }: ArchitectureViewerProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const defaultNodes: Node[] = [
    { id: '1', label: 'Client / UI', type: 'frontend', x: 25, y: 35, details: 'Client layer handling state, rendering, and interactions.' },
    { id: '2', label: 'API Services', type: 'backend', x: 50, y: 50, details: 'Backend server processing business logic and security policies.' },
    { id: '3', label: 'Data Store', type: 'database', x: 75, y: 65, details: 'Database layer managing storage, persistence, and indexing.' },
  ];

  const defaultEdges: Edge[] = [
    { source: '1', target: '2', label: 'REST / HTTPS' },
    { source: '2', target: '3', label: 'Query / Transaction' },
  ];

  const nodes = propNodes || (data && typeof data === 'object' && Array.isArray(data.nodes) ? data.nodes : defaultNodes);
  const edges = propEdges || (data && typeof data === 'object' && Array.isArray(data.edges) ? data.edges : defaultEdges);
  const textDescription = typeof data === 'string' ? data : (data?.description || null);

  // Responsive scale factor could be added here, but for simplicity we use absolute or percentage positioning
  // Using an SVG overlay for edges

  return (
    <div className="border border-black p-6 bg-gray-50 relative overflow-hidden flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-2/3 h-[400px] border border-gray-200 bg-white">
        {/* SVG Edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {edges.map((edge: any, i: number) => {
            const source = nodes.find((n: any) => n.id === edge.source);
            const target = nodes.find((n: any) => n.id === edge.target);
            if (!source || !target) return null;

            return (
              <g key={i}>
                <line
                  x1={`${source.x}%`}
                  y1={`${source.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                  className="animate-pulse"
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node: any) => (
          <button
            key={node.id}
            onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-xs font-mono font-bold border transition-colors ${activeNode === node.id ? 'bg-black text-white border-black z-10' : 'bg-white text-black border-black hover:bg-gray-100 z-0'}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </button>
        ))}
      </div>

      <div className="w-full md:w-1/3 min-h-[150px] border border-black p-4 bg-white">
        {activeNode ? (
          <div>
            <div className="text-xs font-mono text-gray-500 mb-2 uppercase border-b border-gray-200 pb-2">
              Node Details
            </div>
            <h4 className="font-bold mb-2">{nodes.find((n: any) => n.id === activeNode)?.label}</h4>
            <p className="text-sm text-gray-600">
              {nodes.find((n: any) => n.id === activeNode)?.details}
            </p>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-center text-sm text-gray-600 font-mono">
            {textDescription ? (
              <div>
                <div className="text-xs uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">Architecture Summary</div>
                <p className="text-xs leading-relaxed text-gray-700">{textDescription}</p>
                <div className="text-[10px] text-gray-400 mt-3">Click any diagram node for subsystem details.</div>
              </div>
            ) : (
              <span className="text-center text-gray-400">Click a node to view its architectural purpose and details.</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
