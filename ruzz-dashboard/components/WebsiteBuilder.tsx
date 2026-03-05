'use client';

import { useState } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  techStack: string[];
}

export default function WebsiteBuilder() {
  const [projectName, setProjectName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const templates: Template[] = [
    {
      id: 'nextjs-app',
      name: 'Next.js App',
      description: 'Full-featured React application with routing and SSR',
      icon: '⚡',
      features: ['App Router', 'TypeScript', 'Tailwind CSS', 'API Routes'],
      techStack: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind'],
    },
    {
      id: 'static-site',
      name: 'Static Site',
      description: 'Fast, simple static website with HTML/CSS/JS',
      icon: '📄',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'Professional portfolio to showcase your work',
      icon: '💼',
      features: ['Project Gallery', 'About Section', 'Contact Form'],
      techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'High-converting landing page with modern design',
      icon: '🚀',
      features: ['Hero Section', 'Features Grid', 'Call to Action'],
      techStack: ['Next.js', 'Tailwind', 'React'],
    },
    {
      id: 'blog',
      name: 'Blog',
      description: 'Content-focused blog with markdown support',
      icon: '✍️',
      features: ['MDX Support', 'Syntax Highlighting', 'SEO Ready'],
      techStack: ['Next.js', 'MDX', 'Tailwind'],
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Admin dashboard with charts and analytics',
      icon: '📊',
      features: ['Charts', 'Tables', 'Authentication', 'API Integration'],
      techStack: ['Next.js', 'Chart.js', 'Tailwind'],
    },
  ];

  const handleCreate = () => {
    if (!projectName || !selectedTemplate) return;
    
    setIsCreating(true);
    
    // Simulate project creation
    setTimeout(() => {
      alert(`Creating ${projectName} with ${templates.find(t => t.id === selectedTemplate)?.name} template...`);
      setIsCreating(false);
      setProjectName('');
      setSelectedTemplate(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mb-2">
          <span className="text-3xl">🏗️</span>
          Website Builder
        </h2>
        <p className="text-purple-300">
          Create a new project quickly with pre-configured templates
        </p>
      </div>

      {/* Project Name Input */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <label className="block text-sm font-medium text-purple-300 mb-2">
          Project Name
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="my-awesome-project"
          className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
      </div>

      {/* Template Selection */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Choose a Template
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-5 rounded-xl border transition-all text-left ${
                selectedTemplate === template.id
                  ? 'bg-purple-500/20 border-purple-500/50 ring-2 ring-purple-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-4xl mb-3">{template.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {template.name}
              </h4>
              <p className="text-sm text-purple-300 mb-4">
                {template.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-xs font-medium text-purple-300">
                  Features:
                </div>
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-purple-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="text-xs font-medium text-purple-300">
                  Tech Stack:
                </div>
                <div className="flex flex-wrap gap-1">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Create Button */}
      <div className="flex justify-end">
        <button
          onClick={handleCreate}
          disabled={!projectName || !selectedTemplate || isCreating}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
            !projectName || !selectedTemplate || isCreating
              ? 'bg-white/5 border border-white/10 text-purple-300/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
          }`}
        >
          {isCreating ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⚙️</span>
              Creating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>🚀</span>
              Create Project
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
