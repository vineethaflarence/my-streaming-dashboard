// app/layout.tsx
import './globals.css';

import type { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Streaming',
  description: 'Small Netflix/Hulu clone using Next.js 14 + TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen">
        <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <h1 className="text-2xl font-bold">MiniStreaming</h1>
            <nav className="ml-auto">
              {/* future: search or profile */}
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}