"use client";

import { useState } from "react";

export default function CardApplyForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [income, setIncome] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-2">
          Application Submitted 🎉
        </h3>
        <p className="text-green-700">
          Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Apply for Credit Card</h2>

      <div>
        <label className="block text-sm mb-1">Full Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Mobile Number</label>
        <input
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Monthly Income</label>
        <input
          required
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
      >
        Submit Application
      </button>
    </form>
  );
}
