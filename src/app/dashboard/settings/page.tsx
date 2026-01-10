"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Murali");
  const [email, setEmail] = useState("murali@example.com");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(false);

  return (
    <div className="max-w-3xl space-y-10">

      {/* ================= PROFILE ================= */}
      <section className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Profile Details</h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
          </div>

        </div>

        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </section>

      {/* ================= PASSWORD ================= */}
      <section className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>

        <div className="space-y-4 max-w-md">

          <div>
            <label className="text-sm font-medium">Old Password</label>
            <input
              type="password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
          </div>

        </div>

        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Update Password
        </button>
      </section>

      {/* ================= NOTIFICATIONS ================= */}
      <section className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>

        <div className="space-y-4">

          <Toggle
            label="Email Notifications"
            checked={notifyEmail}
            onChange={() => setNotifyEmail(!notifyEmail)}
          />

          <Toggle
            label="SMS Notifications"
            checked={notifySms}
            onChange={() => setNotifySms(!notifySms)}
          />

        </div>

        <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Save Preferences
        </button>
      </section>

    </div>
  );
}

/* ================= TOGGLE SWITCH ================= */

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>

      <button
        onClick={onChange}
        className={`w-12 h-6 rounded-full transition flex items-center ${
          checked ? "bg-indigo-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
