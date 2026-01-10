export default function BusinessPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Business Banking</h1>
      <p className="text-slate-600 max-w-2xl">
        Banking solutions for startups, MSMEs and enterprises to grow faster.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <Card title="Current Account" />
        <Card title="Working Capital Loans" />
        <Card title="POS & Payments" />
      </div>
    </main>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 text-sm mt-2">
        Smart business solutions tailored for your growth.
      </p>
    </div>
  );
}
