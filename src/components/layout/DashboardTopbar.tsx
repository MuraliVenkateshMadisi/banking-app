"use client";

export default function DashboardTopbar() {
  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; max-age=0";
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };


  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">Hello, User</span>

        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
