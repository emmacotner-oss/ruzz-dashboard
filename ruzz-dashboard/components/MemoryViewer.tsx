'use client';

import { useState } from 'react';

interface MemoryViewerProps {
  compact?: boolean;
}

export default function MemoryViewer({ compact = false }: MemoryViewerProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // Mock data - in production, this would be fetched from the memory directory
  const dailyMemories = [
    { date: '2026-03-05', entries: 12, size: '4.2 KB' },
    { date: '2026-03-04', entries: 18, size: '6.8 KB' },
    { date: '2026-03-03', entries: 15, size: '5.1 KB' },
    { date: '2026-03-02', entries: 9, size: '3.4 KB' },
  ];

  const keyExcerpts = [
    {
      category: 'User Preferences',
      content: 'Emma prefers concise responses and modern, minimalist UI design.',
    },
    {
      category: 'Project Context',
      content: 'Working on Ruzz Dashboard - AI agent control center with Next.js.',
    },
    {
      category: 'Recent Decisions',
      content: 'Using Next.js 14, TypeScript, and Tailwind CSS for all new web projects.',
    },
  ];

  if (compact) {
    return (
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🧠</span>
          Recent Memory
        </h2>
        <div className="space-y-2">
          {dailyMemories.slice(0, 3).map((mem) => (
            <div
              key={mem.date}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div>
                <div className="text-sm font-medium text-white">{mem.date}</div>
                <div className="text-xs text-purple-300">{mem.entries} entries</div>
              </div>
              <div className="text-xs text-purple-300">{mem.size}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Daily Memory Files */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">📅</span>
          Daily Memory Files
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dailyMemories.map((mem) => (
            <button
              key={mem.date}
              onClick={() => setSelectedFile(mem.date)}
              className={`p-4 rounded-xl border transition-all text-left ${
                selectedFile === mem.date
                  ? 'bg-purple-500/20 border-purple-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-lg font-semibold text-white mb-1">{mem.date}</div>
              <div className="text-sm text-purple-300">
                {mem.entries} entries • {mem.size}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Key Excerpts from MEMORY.md */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">💾</span>
          Long-Term Memory (MEMORY.md)
        </h2>
        <div className="space-y-4">
          {keyExcerpts.map((excerpt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-sm font-medium text-purple-300 mb-2">
                {excerpt.category}
              </div>
              <div className="text-white leading-relaxed">{excerpt.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected File Preview */}
      {selectedFile && (
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Memory: {selectedFile}
            </h3>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-purple-300 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="p-4 rounded-xl bg-black/30 border border-white/10">
            <pre className="text-sm text-purple-200 whitespace-pre-wrap font-mono">
              {`# ${selectedFile}

## Morning Session
- Reviewed project requirements for Ruzz Dashboard
- Set up Next.js project with TypeScript and Tailwind
- Started building core components

## Decisions Made
- Using Next.js 14 for better performance
- Gradient background for modern aesthetic
- Component-based architecture for maintainability

## Notes
- Emma prefers clean, modern UI
- Focus on functionality over decoration
- Keep it responsive and fast`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
