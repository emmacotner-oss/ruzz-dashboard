'use client';

import { useState, useEffect } from 'react';
import StatusPanel from '@/components/StatusPanel';
import MemoryViewer from '@/components/MemoryViewer';
import ProjectTracker from '@/components/ProjectTracker';
import WebsiteBuilder from '@/components/WebsiteBuilder';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'memory' | 'projects' | 'builder'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Ruzz Dashboard</h1>
                <p className="text-sm text-purple-300">AI Agent Control Center</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-green-300">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-white/10 bg-black/10 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <nav className="flex gap-1">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'memory', label: 'Memory', icon: '🧠' },
              { id: 'projects', label: 'Projects', icon: '📁' },
              { id: 'builder', label: 'Builder', icon: '🏗️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-purple-300 hover:text-white'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <StatusPanel />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MemoryViewer compact />
              <ProjectTracker compact />
            </div>
          </div>
        )}
        {activeTab === 'memory' && <MemoryViewer />}
        {activeTab === 'projects' && <ProjectTracker />}
        {activeTab === 'builder' && <WebsiteBuilder />}
      </main>
    </div>
  );
}
