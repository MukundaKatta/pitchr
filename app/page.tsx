"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // non-fatal
    }
  }

  return (
    <>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-500" />
          Pitchr
        </a>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/try" className="hidden sm:inline hover:opacity-70">
            Try it
          </Link>
          <a
            href="#waitlist"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Get early access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-violet-100 via-violet-50 to-transparent opacity-60" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 text-center sm:pt-28">
          <p className="mb-5 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
            Productivity
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-7xl">
            Agency proposals, written in ten minutes.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Tell us about the client and the scope. Get a polished proposal with pricing and timeline, on your letterhead.
          </p>

          {!submitted ? (
            <form
              id="waitlist"
              onSubmit={handleWaitlist}
              className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-base placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 sm:w-80"
              />
              <button
                type="submit"
                className="rounded-full bg-neutral-900 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-700"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            <p className="mt-12 text-sm font-medium text-violet-700">
              Thanks. We will ping you the day we launch.
            </p>
          )}

          <p className="mt-6 text-xs text-neutral-400">
            Early access list is open. First 100 get in free forever.
          </p>
        </div>
      </section>

      {/* Demo */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">
              Live preview
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it in action</h2>
          </div>
          <div className="mt-12">
            <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Proposal · Acme Co. redesign
              </div>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  ["Discovery & strategy", "$8,500"],
                  ["Brand system design", "$16,200"],
                  ["Website design (12 pages)", "$24,000"],
                  ["Development & launch", "$18,500"],
                ].map(([label, price]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-neutral-200 pb-2"
                  >
                    <span>{label}</span>
                    <span className="font-medium">{price}</span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-violet-700">$67,200</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-neutral-500">
                Generated from a 4-line brief · timeline: 10 weeks
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/try"
              className="inline-block rounded-full bg-violet-600 px-7 py-3.5 font-medium text-white transition hover:bg-violet-700"
            >
              Generate a proposal →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What you get</h2>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {[
              {
                icon: "📋",
                title: "Your template, your tone",
                body: "Upload one good proposal once. Every future one matches it automatically.",
              },
              {
                icon: "💲",
                title: "Smart pricing logic",
                body: "Time estimates, fixed fees, retainer math. We help you quote without undercharging.",
              },
              {
                icon: "✉️",
                title: "Sends and tracks",
                body: "Fire it as a trackable link. See when the client opened it, and where they lingered.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title}>
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps. No learning curve.
            </h2>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {[
              {
                n: 1,
                title: "Sign up in seconds",
                body: "Email only. No credit card. You're in before you can overthink it.",
              },
              {
                n: 2,
                title: "Set up your context",
                body: "Tell us about your agency. The whole product tunes around that.",
              },
              {
                n: 3,
                title: "Get value on day one",
                body: "Not week two. Day one. That's how fast you'll know it's working.",
              },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                  {n}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Be the first in line.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          Early access starts soon. Get on the list and we will reach out the moment we open the doors.
        </p>
        <a
          href="#waitlist"
          className="mt-8 inline-block rounded-full bg-violet-600 px-7 py-3.5 font-medium text-white transition hover:bg-violet-700"
        >
          Reserve my spot
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-neutral-500">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
            Pitchr
          </p>
          <p>© 2026</p>
        </div>
      </footer>
    </>
  );
}
