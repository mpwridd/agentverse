"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/deals", label: "Deals" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--accent)" }}>
          <span className="text-2xl">🤖</span>
          <span>AgentVerse</span>
        </Link>
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
        <ul className="hidden md:flex gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background = "var(--bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block px-3 py-2 rounded-lg text-sm"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
