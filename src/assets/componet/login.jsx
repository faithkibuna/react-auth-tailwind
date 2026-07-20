<body classname="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
  <div classname="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:flex-row lg:gap-10 lg:p-12">
    <div classname="max-w-md space-y-4 text-center lg:text-left">
      <p classname="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Welcome back
      </p>
      <h1 classname="text-3xl font-semibold sm:text-4xl">
        Sign in to your account
      </h1>
      <p classname="text-slate-300">
        Access your workspace and keep your authentication flow moving.
      </p>
    </div>

    <form
      id="loginForm"
      classname="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
    >
      <p id="errorMessage" classname="text-red-500"></p>

      <div>
        <label
          for="email"
          classname="mb-2 block text-sm font-medium text-slate-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          classname="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none ring-0 transition focus:border-cyan-400"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label
          for="password"
          classname="mb-2 block text-sm font-medium text-slate-200"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          classname="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        classnamename="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Login
      </button>

      <p classname="text-center text-sm text-slate-400">
        New here?
        <a
          href="register.html"
          classname="font-medium text-cyan-400 hover:text-cyan-300"
        >
          Create an account
        </a>
      </p>
    </form>
  </div>
</body>;
