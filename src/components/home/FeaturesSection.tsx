function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-8 hover:shadow-md transition">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Everything you need in one place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard title="Secure Accounts" desc="Advanced encryption & protection." />
          <FeatureCard title="Smart Dashboard" desc="Track expenses in real-time." />
          <FeatureCard title="Instant Transfers" desc="Send money instantly." />
          <FeatureCard title="Expense Insights" desc="Spending analytics." />
          <FeatureCard title="24/7 Access" desc="Anytime banking." />
          <FeatureCard title="Future Ready" desc="Modern tech platform." />
        </div>
      </div>
    </section>
  );
}
