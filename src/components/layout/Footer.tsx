import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">
              Bank<span className="text-black">X</span>
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              A modern digital banking platform built for speed, security,
              and simplicity.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Security</Link></li>
              <li><Link href="#">Mobile App</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
              <li><Link href="#">Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t my-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} BankX. All rights reserved.
          </p>
          <p>
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
