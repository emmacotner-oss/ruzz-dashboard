'use client';

import { useState, useEffect } from 'react';

interface StatusData {
  activity: string;
  lastHeartbeat: string;
  activeTasks: string[];
  uptime: string;
}

export default function StatusPanel() {
  const [status, setStatus] = useState<StatusData>({
    activity: 'Monitoring systems',
    lastHeartbeat: new Date().toLocaleTimeString(),
    activeTasks: [
      'Building Ruzz Dashboard',
      'Monitoring memory files',
      'Tracking active projects',
    ],
    uptime: '2h 34m',
  });

  useEffect(() => {
    // Update heartbeat every minute
    const interval = setInterval(() => {
      setStatus(prev => ({
        ...prev,
        lastHeartbeat: new Date().toLocaleTimeString(),
      }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          Status
        </h2>
        <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium">
          Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Activity */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-sm text-purple-300 mb-1">Current Activity</div>
          <div className="text-lg font-semibold text-white">{status.activity}</div>
        </div>

        {/* Last Heartbeat */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-sm text-purple-300 mb-1">Last Heartbeat</div>
          <div className="text-lg font-semibold text-white">{status.lastHeartbeat}</div>
        </div>

        {/* Active Tasks */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-sm text-purple-300 mb-1">Active Tasks</div>
          <div className="text-lg font-semibold text-white">{status.activeTasks.length}</div>
        </div>

        {/* Uptime */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-sm text-purple-300 mb-1">Session Uptime</div>
          <div className="text-lg font-semibold text-white">{status.uptime}</div>
        </div>
      </div>

      {/* Active Tasks List */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-purple-300 mb-3">Active Tasks</h3>
        <div className="space-y-2">
          {status.activeTasks.map((task, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm text-white">{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
