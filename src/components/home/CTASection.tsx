export default function CTASection() {
  return (
    <section className="bg-indigo-700 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to take control of your finances?
        </h3>
        <p className="text-indigo-100 mb-8">
          Join thousands of users already banking smarter.
        </p>
        <a
          href="/register"
          className="bg-white text-indigo-700 px-10 py-3 rounded-lg font-semibold hover:bg-slate-100"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
