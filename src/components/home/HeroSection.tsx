export default function HeroSection() {
  return (
    <section className="bg-linear-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smarter Banking <br className="hidden md:block" />
          for the Digital World
        </h1>

        <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          Manage your accounts, track transactions, and transfer money securely
          with our next-generation digital banking platform.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/register"
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100"
          >
            Open Account
          </a>
          <a
            href="/login"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
