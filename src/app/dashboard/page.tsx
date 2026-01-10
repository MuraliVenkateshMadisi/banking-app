"use client";

import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ===== CHART DATA ===== */
const spendData = [
  { month: "Aug", amount: 4000 },
  { month: "Sep", amount: 3200 },
  { month: "Oct", amount: 5100 },
  { month: "Nov", amount: 4600 },
  { month: "Dec", amount: 6200 },
  { month: "Jan", amount: 3900 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Welcome back 👋</h2>
        <p className="text-slate-600 text-sm mt-1">
          Here’s what’s happening with your accounts today.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Balance" value="₹ 45,200" />
        <StatCard title="Monthly Spend" value="₹ 12,300" />
        <StatCard title="Transactions" value="128" />
      </div>

      {/* ===== SPENDING CHART ===== */}
      <section className="bg-white border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Spending</h3>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spendData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickAction title="Transfer" href="/dashboard/transfer" />
        <QuickAction title="Accounts" href="/dashboard/accounts" />
        <QuickAction title="Transactions" href="/dashboard/transactions" />
        <QuickAction title="Add Payee" href="#" />
      </div>

      {/* ACCOUNTS PREVIEW */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Accounts</h3>
          <Link
            href="/dashboard/accounts"
            className="text-sm text-indigo-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccountCard
            type="Savings Account"
            number="**** 4321"
            balance="₹ 32,450"
            color="from-indigo-600 to-indigo-800"
          />

          <AccountCard
            type="Current Account"
            number="**** 9876"
            balance="₹ 12,750"
            color="from-emerald-600 to-emerald-800"
          />
        </div>
      </section>

      {/* RECENT TRANSACTIONS */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <Link
            href="/dashboard/transactions"
            className="text-sm text-indigo-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="bg-white rounded-xl border divide-y">
          <TransactionRow
            title="Salary Credit"
            date="06 Jan 2026"
            amount="+ ₹25,000"
            type="credit"
            status="Completed"
          />
          <TransactionRow
            title="Electricity Bill"
            date="05 Jan 2026"
            amount="- ₹1,450"
            type="debit"
            status="Completed"
          />
          <TransactionRow
            title="Amazon Purchase"
            date="04 Jan 2026"
            amount="- ₹2,399"
            type="debit"
            status="Completed"
          />
        </div>
      </section>

    </div>
  );
}

/* ===== COMPONENTS ===== */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <p className="text-sm text-slate-600">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

function QuickAction({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-white border rounded-xl p-4 text-center text-sm font-medium hover:shadow-md transition"
    >
      {title}
    </Link>
  );
}

function AccountCard({
  type,
  number,
  balance,
  color,
}: {
  type: string;
  number: string;
  balance: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl p-6 text-white bg-gradient-to-br ${color}`}>
      <p className="text-sm opacity-80">{type}</p>
      <p className="mt-4 text-lg tracking-widest">{number}</p>
      <div className="mt-6">
        <p className="text-sm opacity-80">Available Balance</p>
        <p className="text-3xl font-bold">{balance}</p>
      </div>
    </div>
  );
}

function TransactionRow({
  title,
  date,
  amount,
  type,
  status,
}: {
  title: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
  status: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-slate-500">{date}</p>
      </div>

      <div className="text-right">
        <p
          className={`font-semibold ${
            type === "credit" ? "text-green-600" : "text-red-600"
          }`}
        >
          {amount}
        </p>
        <p className="text-xs text-slate-500">{status}</p>
      </div>
    </div>
  );
}
