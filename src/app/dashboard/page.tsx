export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Account Overview</h2>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Balance" value="₹ 45,200" />
        <StatCard title="Monthly Spend" value="₹ 12,300" />
        <StatCard title="Transactions" value="128" />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <p className="text-sm text-slate-600">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
