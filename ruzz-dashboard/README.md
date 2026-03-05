# 🤖 Ruzz Dashboard

A comprehensive AI agent control center built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

### 📊 Status Panel
- Display Ruzz's current activity and status
- Real-time heartbeat monitoring
- Active tasks tracking
- Session uptime display

### 🧠 Memory Viewer
- Browse daily memory files
- View key excerpts from MEMORY.md
- Search and filter memory entries
- Track important decisions and learnings

### 📁 Project Tracker
- List all active, completed, and planned projects
- Quick access to project URLs
- Project status indicators
- Filter by project type

### 🏗️ Website Builder
- Quick project creation interface
- Multiple pre-configured templates:
  - Next.js App
  - Static Site
  - Portfolio
  - Landing Page
  - Blog
  - Dashboard
- One-click project scaffolding

## 🚀 Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The dashboard will be available at:
- **Local**: http://localhost:3000
- **Network**: http://10.10.1.37:3000

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Design

The dashboard features a modern, clean design with:
- Dark gradient background (slate + purple)
- Glass-morphism effects
- Smooth animations and transitions
- Fully responsive layout
- Custom scrollbar styling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: React 19
- **Package Manager**: npm

## 📂 Project Structure

```
ruzz-dashboard/
├── app/
│   ├── page.tsx          # Main dashboard page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── StatusPanel.tsx   # Status display component
│   ├── MemoryViewer.tsx  # Memory browser component
│   ├── ProjectTracker.tsx # Project list component
│   └── WebsiteBuilder.tsx # Template builder component
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🔮 Future Enhancements

- Real-time data integration with Ruzz's memory system
- WebSocket connection for live updates
- File system API integration for actual memory file reading
- Project creation functionality with actual template scaffolding
- Analytics and activity charts
- Dark/light mode toggle
- Customizable dashboard layouts

## 📝 Notes

Currently using mock data for demonstration. In production, the dashboard would:
- Read from actual memory files in `memory/YYYY-MM-DD.md`
- Parse and display MEMORY.md content
- Scan `businesses/` directory for projects
- Execute actual project creation commands

## 🎯 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

Built with ❤️ for efficient AI agent management
