"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // check login from cookie
  useEffect(() => {
    const hasCookie = document.cookie.includes("isLoggedIn=true");
    setLoggedIn(hasCookie);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-700">Nxt</span>
          <span className="text-xl font-bold text-gray-900">Bank</span>
        </Link>

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800">

          <NavItem title="Personal" link="/personal" active={active} setActive={setActive}>
            <MegaMenu
              base="/personal"
              title="Discover Personal"
              left={["accounts", "cards", "loans", "insurance", "investments", "payments"]}
              right={[
                "savings-account",
                "salary-account",
                "private-banking",
                "privy",
                "solitaire",
                "3-in-1-account",
              ]}
            />
          </NavItem>

          <NavItem title="Business" link="/business" active={active} setActive={setActive}>
            <MegaMenu
              base="/business"
              title="Discover Business"
              left={["accounts", "loans", "payments", "trade", "msme"]}
              right={[
                "current-account",
                "working-capital",
                "pos-solutions",
                "merchant-services",
              ]}
            />
          </NavItem>

          <NavItem title="NRI" link="/nri" active={active} setActive={setActive}>
            <MegaMenu
              base="/nri"
              title="Discover NRI"
              left={[
                "accounts",
                "deposits",
                "investment",
                "money-transfer",
                "cards",
                "loans",
              ]}
              right={["savings-account", "current-account", "privy"]}
            />
          </NavItem>

          <NavItem title="About Us" link="/about" active={active} setActive={setActive}>
            <SimpleMenu
              base="/about"
              items={["story", "careers", "investors", "media"]}
            />
          </NavItem>

          <span className="h-5 w-px bg-gray-300" />

          <NavItem title="Learn" link="/learn" active={active} setActive={setActive}>
            <SimpleMenu
              base="/learn"
              items={["safe-banking", "digital-banking", "calculators", "financial-education"]}
            />
          </NavItem>

          <NavItem title="Help" link="/help" active={active} setActive={setActive}>
            <SimpleMenu
              base="/help"
              items={["contact", "faq", "branch-locator"]}
            />
          </NavItem>

        </nav>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">🔍</button>

          {loggedIn ? (
            <Link
              href="/dashboard"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}

/* ---------------- NAV ITEM ---------------- */

function NavItem({ title, link, active, setActive, children }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(title)}
      onMouseLeave={() => setActive(null)}
    >
      <Link
        href={link}
        className={`flex items-center gap-1 py-5 ${
          active === title
            ? "text-red-600 border-b-2 border-red-600"
            : "hover:text-indigo-700"
        }`}
      >
        {title} ▾
      </Link>

      {active === title && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------------- MEGA MENU ---------------- */

function MegaMenu({ title, base, left, right }: any) {
  return (
    <div className="bg-gray-100 rounded-3xl shadow-xl w-[680px] p-4">
      <div className="bg-white rounded-2xl p-6 grid grid-cols-2 gap-6">

        <div>
          <p className="text-lg font-bold mb-4">{title} →</p>
          <ul className="space-y-3 text-sm font-medium">
            {left.map((i: string) => (
              <li key={i}>
                <Link
                  href={`${base}/${i}`}
                  className="hover:text-indigo-700 block"
                >
                  {formatLabel(i)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 text-sm font-medium">
          {right.map((i: string) => (
            <Link
              href={`${base}/${i}`}
              key={i}
              className="flex items-center gap-3 bg-gray-50 hover:bg-indigo-50 p-3 rounded-xl"
            >
              <span className="text-indigo-700">🏦</span>
              {formatLabel(i)}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ---------------- SIMPLE MENU ---------------- */

function SimpleMenu({ base, items }: any) {
  return (
    <div className="bg-gray-100 rounded-3xl shadow-xl w-64 p-4">
      <div className="bg-white rounded-2xl p-4 space-y-3 text-sm font-medium">
        {items.map((i: string) => (
          <Link
            key={i}
            href={`${base}/${i}`}
            className="hover:bg-indigo-50 p-2 rounded-lg block"
          >
            {formatLabel(i)}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------- UTIL ---------------- */

function formatLabel(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
