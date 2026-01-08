"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome back
        </h1>
        <p className="text-center text-slate-600 mb-8">
          Login to your banking account
        </p>

        {/* FORM */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <Link href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="button"
            onClick={() => {
              document.cookie = "isLoggedIn=true; path=/";
              localStorage.setItem("isLoggedIn", "true");
              window.location.href = "/dashboard";
            }}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
          Login
        </button>

      </form>

      {/* FOOTER */}
      <p className="text-center text-sm text-slate-600 mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-indigo-600 font-medium">
          Open one
        </Link>
      </p>
    </div>
    </div >
  );
}
