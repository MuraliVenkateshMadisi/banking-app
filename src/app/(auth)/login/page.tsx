export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="Password"
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
