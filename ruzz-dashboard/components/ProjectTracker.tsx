'use client';

interface ProjectTrackerProps {
  compact?: boolean;
}

interface Project {
  name: string;
  status: 'active' | 'planned' | 'completed' | 'paused';
  type: 'web' | 'api' | 'tool' | 'other';
  url?: string;
  description: string;
  lastUpdated: string;
}

export default function ProjectTracker({ compact = false }: ProjectTrackerProps) {
  // Mock data - in production, this would be fetched from the businesses/projects directory
  const projects: Project[] = [
    {
      name: 'Ruzz Dashboard',
      status: 'active',
      type: 'web',
      url: 'http://localhost:3000',
      description: 'AI agent control center with Next.js and TypeScript',
      lastUpdated: '2026-03-05',
    },
    {
      name: 'Portfolio Website',
      status: 'completed',
      type: 'web',
      url: 'https://emma-portfolio.com',
      description: 'Personal portfolio showcasing projects and skills',
      lastUpdated: '2026-03-01',
    },
    {
      name: 'Task Automation API',
      status: 'planned',
      type: 'api',
      description: 'RESTful API for automating routine tasks',
      lastUpdated: '2026-03-03',
    },
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 border-green-500/30 text-green-300';
      case 'completed':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-300';
      case 'planned':
        return 'bg-purple-500/20 border-purple-500/30 text-purple-300';
      case 'paused':
        return 'bg-orange-500/20 border-orange-500/30 text-orange-300';
    }
  };

  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'web':
        return '🌐';
      case 'api':
        return '🔌';
      case 'tool':
        return '🛠️';
      default:
        return '📦';
    }
  };

  if (compact) {
    return (
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">📁</span>
          Active Projects
        </h2>
        <div className="space-y-2">
          {projects
            .filter((p) => p.status === 'active')
            .map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{getTypeIcon(project.type)}</span>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {project.name}
                    </div>
                    <div className="text-xs text-purple-300">
                      {project.description}
                    </div>
                  </div>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    ↗
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-2xl">📁</span>
          Projects
        </h2>
        <div className="flex gap-2">
          {['all', 'active', 'completed', 'planned'].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-purple-300 hover:bg-white/10 hover:text-white transition-colors capitalize"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTypeIcon(project.type)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-purple-300">{project.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div
                className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-purple-300">
                  {project.lastUpdated}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-colors text-sm"
                  >
                    Open →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
