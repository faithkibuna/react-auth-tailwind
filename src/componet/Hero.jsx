import { Link } from "react-router";

function Hero() {
  return (
    <section class="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <div class="space-y-6">
        <span class="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
          Modern authentication, made simple
        </span>
        <h1 class="text-4xl font-semibold leading-tight sm:text-5xl">
          Build trust with a polished auth experience.
        </h1>
        <p class="max-w-xl text-lg text-slate-300">
          Create an account, sign in securely, and manage users from one elegant
          dashboard.
        </p>
        <div class="flex flex-wrap gap-4">
          <Link
            to="/register"
            class="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Create account
          </Link>
          <Link
            to="login"
            class="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>

      <div class="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
        <h2 class="text-xl font-semibold">Why teams love it</h2>
        <div class="mt-6 space-y-4 text-sm text-slate-300">
          <div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p class="font-semibold text-white">Fast onboarding</p>
            <p class="mt-2">
              Collect account details with a streamlined form and clear
              validation.
            </p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p class="font-semibold text-white">Insightful admin view</p>
            <p class="mt-2">
              Monitor signups and track user activity from a polished dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
