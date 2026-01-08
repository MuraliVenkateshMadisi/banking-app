"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Bank<span className="text-black">MADISI</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Features
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Security
          </Link>
          <Link href="#" className="hover:text-indigo-600">
            Support
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-indigo-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
          >
            Open Account
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Features
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Security
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Support
            </Link>

            <hr />

            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link
              href="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Open Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
