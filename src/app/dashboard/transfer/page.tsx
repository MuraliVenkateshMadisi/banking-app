"use client";

import { useState } from "react";

export default function TransferPage() {
  const [amount, setAmount] = useState("");
  const [toAccount, setToAccount] = useState("");

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Transfer Money</h2>

      <div className="bg-white rounded-xl border p-6 space-y-6">
        {/* FROM ACCOUNT */}
        <div>
          <label className="block text-sm font-medium mb-1">
            From Account
          </label>
          <select className="w-full border rounded-lg px-4 py-2">
            <option>Savings Account - ****4321</option>
            <option>Current Account - ****9876</option>
          </select>
        </div>

        {/* TO ACCOUNT */}
        <div>
          <label className="block text-sm font-medium mb-1">
            To (Recipient)
          </label>
          <input
            type="text"
            placeholder="Enter account or UPI ID"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* AMOUNT */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            type="number"
            placeholder="₹ Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* SUBMIT */}
        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          onClick={() => alert("Transfer submitted (UI only)")}
        >
          Send Money
        </button>
      </div>
    </div>
  );
}
