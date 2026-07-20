function dashboardheader() {
  return (
    <header classname="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-4 shadow-lg shadow-cyan-950/20">
      <div>
        <p classname="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Admin panel
        </p>
        <h1 classname="text-xl font-semibold">User dashboard</h1>
      </div>
      <button
        id="logout"
        classname="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-white"
      >
        Logout
      </button>
    </header>
  );
}
export default dashboardheader;
