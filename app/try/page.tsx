"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  clientName: string;
  projectDescription: string;
  budget: string;
};

function generateProposal(form: FormState): string {
  return `PROPOSAL FOR ${form.clientName.toUpperCase()}

Dear ${form.clientName} team,

Thank you for the opportunity to present this proposal. Based on your project description — "${form.projectDescription}" — we have outlined a tailored engagement below.

SCOPE OF WORK

Phase 1 — Discovery & Strategy (Weeks 1–2)
We begin with a deep-dive into your brand, audience, and competitive landscape. Deliverables include a project brief, stakeholder alignment document, and a phased roadmap.

Phase 2 — Design & Prototyping (Weeks 3–6)
Our design team will develop wireframes, visual concepts, and a clickable prototype. You will receive two rounds of revisions before sign-off.

Phase 3 — Development & Integration (Weeks 7–10)
Engineering builds and integrates the approved designs. All work is tested across modern browsers and devices before handoff.

Phase 4 — Launch & Support (Weeks 11–12)
We manage the production deployment, monitor performance, and provide two weeks of post-launch support.

INVESTMENT

Based on a budget of ${form.budget}, we propose the following allocation:

  Discovery & Strategy      20%
  Design & Prototyping      30%
  Development               40%
  Launch & Support          10%

This reflects our standard blended rate and accounts for the scope described. Final pricing is confirmed after a 30-minute scoping call.

TIMELINE

Estimated project duration: 12 weeks from signed agreement.
Kickoff can begin within 5 business days of contract execution.

WHY US

We have delivered over 120 projects for agencies and brands at this scale. Our process is built around minimal back-and-forth and maximum output quality — so you spend less time managing us and more time closing your own clients.

NEXT STEPS

  1. Review this proposal and note any questions.
  2. Book a 30-minute call to align on scope.
  3. We send the contract; you sign and we kick off.

We look forward to partnering with you.

— The Pitchr Team
`;
}

export default function TryPage() {
  const [form, setForm] = useState<FormState>({
    clientName: "",
    projectDescription: "",
    budget: "",
  });
  const [proposal, setProposal] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProposal(generateProposal(form));
  }

  function handleReset() {
    setProposal(null);
    setForm({ clientName: "", projectDescription: "", budget: "" });
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-500" />
          Pitchr
        </Link>
      </nav>

      <main className="mx-auto max-w-2xl px-6 py-16">
        {proposal === null ? (
          <>
            <div className="mb-10 text-center">
              <p className="mb-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
                Proposal generator
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
                Generate a proposal
              </h1>
              <p className="mt-3 text-neutral-600">
                Fill in the basics. Get a polished 200-word proposal in seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="clientName"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Client name
                </label>
                <input
                  id="clientName"
                  name="clientName"
                  type="text"
                  required
                  placeholder="Acme Co."
                  value={form.clientName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-base placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Project description
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  rows={4}
                  placeholder="Redesign our marketing site and brand identity ahead of Series A."
                  value={form.projectDescription}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-base placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Budget
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  required
                  placeholder="$50,000"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-base placeholder-neutral-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-neutral-900 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-700"
              >
                Generate proposal →
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                Your proposal
              </h1>
              <button
                onClick={handleReset}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                Start over
              </button>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-800">
                {proposal}
              </pre>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-500">
                This is a v0 skeleton with mocked output.{" "}
                <Link href="/" className="text-violet-600 hover:underline">
                  Join the waitlist
                </Link>{" "}
                to get the real thing.
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
