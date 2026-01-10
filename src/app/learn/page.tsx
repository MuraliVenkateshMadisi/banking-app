import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Learn & Tools</h1>

      <ul className="space-y-4 text-indigo-700 font-medium">
        <li>
          <Link href="/learn/calculators/emi">👉 EMI Calculator</Link>
        </li>
        <li>Safe Banking</li>
        <li>Digital Banking</li>
        <li>Financial Education</li>
      </ul>
    </main>
  );
}
