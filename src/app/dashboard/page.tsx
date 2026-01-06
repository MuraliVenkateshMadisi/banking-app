export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-5 rounded-xl shadow">
          Balance: ₹45,200
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          Transactions
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          Alerts
        </div>
      </div>
    </div>
  );
}
