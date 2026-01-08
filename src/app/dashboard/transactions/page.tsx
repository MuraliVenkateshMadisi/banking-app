type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
  status: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Salary Credit",
    date: "06 Jan 2026",
    amount: "+ ₹25,000",
    type: "credit",
    status: "Completed",
  },
  {
    id: 2,
    title: "Electricity Bill",
    date: "05 Jan 2026",
    amount: "- ₹1,450",
    type: "debit",
    status: "Completed",
  },
  {
    id: 3,
    title: "Amazon Purchase",
    date: "04 Jan 2026",
    amount: "- ₹2,399",
    type: "debit",
    status: "Completed",
  },
  {
    id: 4,
    title: "Friend Transfer",
    date: "03 Jan 2026",
    amount: "- ₹500",
    type: "debit",
    status: "Pending",
  },
];

export default function TransactionsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>

      <div className="bg-white rounded-xl border divide-y">
        {transactions.map((tx) => (
          <TransactionRow key={tx.id} {...tx} />
        ))}
      </div>
    </div>
  );
}

/* ================= TRANSACTION ROW ================= */

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
