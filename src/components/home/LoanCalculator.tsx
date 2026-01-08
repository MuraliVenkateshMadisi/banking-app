"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState<string | null>(null);

  const calculateEmi = () => {
    const P = Number(amount);
    const R = Number(rate) / 12 / 100;
    const N = Number(years) * 12;
    if (!P || !R || !N) return;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(0));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Loan EMI Calculator</h2>

        <div className="bg-white p-8 rounded-xl border grid md:grid-cols-3 gap-6">
          <input placeholder="Loan Amount (₹)" value={amount}
            onChange={(e) => setAmount(e.target.value)} className="border px-4 py-2 rounded" />
          <input placeholder="Interest %" value={rate}
            onChange={(e) => setRate(e.target.value)} className="border px-4 py-2 rounded" />
          <input placeholder="Tenure (years)" value={years}
            onChange={(e) => setYears(e.target.value)} className="border px-4 py-2 rounded" />

          <button onClick={calculateEmi}
            className="md:col-span-3 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Calculate EMI
          </button>

          {emi && (
            <div className="md:col-span-3 text-center text-xl font-bold text-green-600">
              Monthly EMI: ₹ {emi}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
