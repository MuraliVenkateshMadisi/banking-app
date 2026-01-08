"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Overview", href: "/dashboard" },
  { name: "Accounts", href: "/dashboard/accounts" },
  { name: "Transactions", href: "/dashboard/transactions" },
  { name: "Transfer Money", href: "/dashboard/transfer" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-white border-r min-h-screen p-6">
      {/* LOGO */}
      <h2 className="text-xl font-bold text-indigo-600 mb-10">
        Bank<span className="text-black">X</span>
      </h2>

      {/* NAV */}
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              pathname === link.href
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
