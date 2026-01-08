export default function AccountsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Accounts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccountCard
          type="Savings Account"
          number="XXXX XXXX 4321"
          balance="₹ 32,450"
          color="from-indigo-600 to-indigo-800"
        />

        <AccountCard
          type="Current Account"
          number="XXXX XXXX 9876"
          balance="₹ 12,750"
          color="from-emerald-600 to-emerald-800"
        />
      </div>
    </div>
  );
}

/* ================= ACCOUNT CARD ================= */

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
    <div
      className={`rounded-2xl p-6 text-white bg-gradient-to-br ${color}`}
    >
      <p className="text-sm opacity-80">{type}</p>

      <p className="mt-4 text-lg tracking-widest">{number}</p>

      <div className="mt-6">
        <p className="text-sm opacity-80">Available Balance</p>
        <p className="text-3xl font-bold">{balance}</p>
      </div>
    </div>
  );
}
