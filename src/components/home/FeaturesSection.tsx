function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-2xl border p-8 hover:shadow-xl transition group relative overflow-hidden">

      {/* glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* icon */}
      <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white text-xl mb-5">
        {icon}
      </div>

      <h4 className="relative z-10 text-xl font-semibold mb-3">
        {title}
      </h4>

      <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything you need in one place
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-14">
          Manage your money smarter with secure, fast and modern digital
          banking features built for everyday needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <FeatureCard
            icon="🔐"
            title="Secure Accounts"
            desc="Advanced encryption, biometric login and fraud monitoring keep your money protected."
          />

          <FeatureCard
            icon="📊"
            title="Smart Dashboard"
            desc="Track income, spending and balances in real-time with visual insights."
          />

          <FeatureCard
            icon="⚡"
            title="Instant Transfers"
            desc="Send money instantly to any bank using UPI, IMPS and NEFT."
          />

          <FeatureCard
            icon="📈"
            title="Expense Insights"
            desc="Get monthly spending analytics and smart saving suggestions."
          />

          <FeatureCard
            icon="🕒"
            title="24/7 Access"
            desc="Bank anytime, anywhere with secure mobile and web access."
          />

          <FeatureCard
            icon="🚀"
            title="Future Ready"
            desc="Built with modern technology for faster and reliable performance."
          />

        </div>
      </div>
    </section>
  );
}
