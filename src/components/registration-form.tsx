"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type RegistrationFormProps = {
  eventId: number;
};

export default function RegistrationForm({
  eventId,
}: RegistrationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    const { error } = await supabase.from("registrations").insert({
      event_id: eventId,
      name,
      email,
      phone,
    });

    if (error) {
      console.error("Registration error:", error);

      if (error.code === "23505") {
        setError("You are already registered for this event.");
      } else {
        setError(error.message);
      }

      setLoading(false);
      return;
    }


    setMessage("Registration successful! 🎉");
    setName("");
    setEmail("");
    setPhone("");
    setLoading(false);
  }

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <h2 className="text-2xl font-semibold">Register for this event</h2>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Full name
          </label>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nguyen Van A"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Phone
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0123456789"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Registering..." : "Submit Registration"}
        </button>

        {message && (
          <p className="rounded-xl bg-green-500/10 p-4 text-sm text-green-400">
            {message}
          </p>
        )}

        {error && (
          <p className="rounded-xl bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
