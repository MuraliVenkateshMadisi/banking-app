"use client";

import { useMemo, useState } from "react";

// ✅ Advanced EMI Calculator — No external chart libs, only Tailwind
// Features:
// - Sliders + Inputs sync
// - Loan type presets
// - Monthly EMI, Interest, Total
// - Principal vs Interest bars
// - Amortization schedule table
// - Optional prepayment

export default function AdvancedEmiCalculator() {
  // ---------------- STATES ----------------
  const [loanType, setLoanType] = useState("home");
  const [amount, setAmount] = useState(2000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20); // years

  const [prepay, setPrepay] = useState(false);
  const [prepayAmount, setPrepayAmount] = useState(50000);
  const [prepayMonth, setPrepayMonth] = useState(12);

  // ---------------- PRESETS ----------------
  const presets: any = {
    home: { rate: 8.5, tenure: 20 },
    personal: { rate: 12.5, tenure: 5 },
    car: { rate: 9.5, tenure: 7 },
    education: { rate: 10.0, tenure: 10 },
  };

  const applyPreset = (type: string) => {
    setLoanType(type);
    setRate(presets[type].rate);
    setTenure(presets[type].tenure);
  };

  // ---------------- CALCULATIONS ----------------
  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenure * 12;

  const emi = useMemo(() => {
    return (
      (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  }, [amount, rate, tenure]);

  const amortization = useMemo(() => {
    let balance = amount;
    let rows: any[] = [];
    let month = 1;

    for (let i = 1; i <= totalMonths; i++) {
      const interest = balance * monthlyRate;
      let principal = emi - interest;

      if (prepay && i === prepayMonth) {
        principal += prepayAmount;
      }

      balance -= principal;
      if (balance < 0) balance = 0;

      rows.push({ month, principal, interest, balance });
      month++;
      if (balance <= 0) break;
    }
    return rows;
  }, [amount, rate, tenure, prepay, prepayAmount, prepayMonth]);

  const totalPayment = amortization.reduce((s, r) => s + r.principal + r.interest, 0);
  const totalInterest = amortization.reduce((s, r) => s + r.interest, 0);

  const principalPercent = (amount / totalPayment) * 100;
  const interestPercent = (totalInterest / totalPayment) * 100;

  // ---------------- HELPERS ----------------
  const format = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* ================= LEFT : INPUTS ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-indigo-700">Advanced EMI Calculator</h2>

          {/* Loan Type */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["home", "personal", "car", "education"].map((t) => (
              <button
                key={t}
                onClick={() => applyPreset(t)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition ${
                  loanType === t
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Loan Amount */}
          <Field
            label="Loan Amount"
            value={amount}
            setValue={setAmount}
            min={50000}
            max={10000000}
            step={50000}
            format={format}
          />

          {/* Interest Rate */}
          <Field
            label="Interest Rate (%)"
            value={rate}
            setValue={setRate}
            min={5}
            max={20}
            step={0.1}
          />

          {/* Tenure */}
          <Field
            label="Tenure (Years)"
            value={tenure}
            setValue={setTenure}
            min={1}
            max={30}
            step={1}
          />

          {/* Prepayment */}
          <div className="border rounded-xl p-4 space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <input type="checkbox" checked={prepay} onChange={() => setPrepay(!prepay)} />
              Add Prepayment
            </label>

            {prepay && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-1">Prepay Amount</p>
                  <input
                    type="number"
                    value={prepayAmount}
                    onChange={(e) => setPrepayAmount(+e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <p className="text-sm mb-1">At Month</p>
                  <input
                    type="number"
                    value={prepayMonth}
                    onChange={(e) => setPrepayMonth(+e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT : RESULTS ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-indigo-700">Loan Summary</h3>

          <div className="grid grid-cols-2 gap-4">
            <Stat label="Monthly EMI" value={format(emi)} />
            <Stat label="Total Interest" value={format(totalInterest)} />
            <Stat label="Total Payment" value={format(totalPayment)} span />
          </div>

          {/* Bars */}
          <div className="space-y-2">
            <Bar label="Principal" percent={principalPercent} />
            <Bar label="Interest" percent={interestPercent} />
          </div>

          {/* Amortization */}
          <div className="max-h-72 overflow-auto border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-indigo-50 sticky top-0">
                <tr>
                  <th className="p-2 text-left">Month</th>
                  <th className="p-2 text-right">Principal</th>
                  <th className="p-2 text-right">Interest</th>
                  <th className="p-2 text-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortization.map((r, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{r.month}</td>
                    <td className="p-2 text-right">{format(r.principal)}</td>
                    <td className="p-2 text-right">{format(r.interest)}</td>
                    <td className="p-2 text-right">{format(r.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------- SMALL UI PARTS ----------------

function Field({ label, value, setValue, min, max, step, format }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-indigo-700 font-semibold">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="w-full"
      />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="mt-2 w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}

function Stat({ label, value, span }: any) {
  return (
    <div className={`p-4 bg-indigo-50 rounded-xl ${span ? "col-span-2" : ""}`}>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-lg font-bold text-indigo-700">{value}</p>
    </div>
  );
}

function Bar({ label, percent }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percent.toFixed(1)}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
