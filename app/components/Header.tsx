
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-white text-xl font-bold">StreamClone</Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/browse" className="text-sm">Browse</Link>
        </nav>
        <button className="md:hidden p-2 rounded bg-white/5" onClick={()=>setOpen(o=>!o)} aria-label="toggle">☰</button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700">
          <div className="px-4 py-3">
            <Link href="/" className="block">Home</Link>
            <Link href="/browse" className="block">Browse</Link>
          </div>
        </div>
      )}
    </header>
  )
}
