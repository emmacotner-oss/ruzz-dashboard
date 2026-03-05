import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruzz Dashboard | AI Agent Control Center",
  description: "Monitor and control your AI agent's activity, memory, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
