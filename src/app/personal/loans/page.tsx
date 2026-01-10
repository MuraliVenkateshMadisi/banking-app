import LoanCalculator from "@/components/home/LoanCalculator";
import Link from "next/link";

export default function PersonalLoansPage() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personal Loans Made Easy
            </h1>

            <p className="text-indigo-100 mb-8 max-w-lg">
              Get instant personal loans with low interest rates, minimal
              paperwork and fast disbursal.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/login"
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100"
              >
                Apply Now
              </Link>

              <Link
                href="#emi"
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <InfoBox title="Interest Rate" value="From 10.5% p.a." />
            <InfoBox title="Loan Amount" value="Up to ₹25 Lakhs" />
            <InfoBox title="Tenure" value="Up to 5 Years" />
            <InfoBox title="Processing Fee" value="Zero*" />
          </div>

        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Personal Loan?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Benefit icon="⚡" title="Instant Approval" desc="Fast online approval process." />
            <Benefit icon="📄" title="Minimal Documents" desc="Simple KYC and income proof." />
            <Benefit icon="💳" title="Quick Disbursal" desc="Funds credited within 24 hours." />
            <Benefit icon="📱" title="100% Online" desc="Apply and track from mobile." />
          </div>

        </div>
      </section>

      {/* ===== EMI CALCULATOR ===== */}
      <section id="emi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Calculate Your Loan EMI
          </h2>

          <LoanCalculator />
        </div>
      </section>

      {/* ===== ELIGIBILITY ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
            <ul className="space-y-3 text-slate-700">
              <li>✔ Age between 21 – 60 years</li>
              <li>✔ Salaried or Self-employed</li>
              <li>✔ Stable monthly income</li>
              <li>✔ Good credit score</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
            <ul className="space-y-3 text-slate-700">
              <li>✔ Aadhaar / PAN</li>
              <li>✔ Salary slips / Bank statements</li>
              <li>✔ Address proof</li>
              <li>✔ Passport size photo</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Get Your Personal Loan?
        </h2>

        <p className="mb-8 text-indigo-100">
          Apply now and get instant approval.
        </p>

        <Link
          href="/login"
          className="bg-white text-indigo-700 px-10 py-3 rounded-lg font-semibold hover:bg-slate-100"
        >
          Apply for Loan
        </Link>
      </section>

    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function InfoBox({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
      <p className="text-sm text-indigo-100">{title}</p>
      <p className="font-bold mt-1">{value}</p>
    </div>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
