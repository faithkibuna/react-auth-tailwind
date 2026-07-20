function Dashboard() {
  return (
    <body classname="min-h-screen bg-slate-950 text-slate-100">
      <div classname="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
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

        <section classname="mt-8 grid gap-6 md:grid-cols-2">
          <div classname="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <p classname="text-sm uppercase tracking-[0.25em] text-slate-400">
              Total Users
            </p>
            <p
              id="totalUsers"
              classname="mt-3 text-4xl font-semibold text-white"
            >
              ...
            </p>
          </div>
          <div classname="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <p classname="text-sm uppercase tracking-[0.25em] text-slate-400">
              Users this month
            </p>
            <p
              id="usersThisMonth"
              classname="mt-3 text-4xl font-semibold text-white"
            >
              ...
            </p>
          </div>
        </section>

        <section classname="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <div classname="border-b border-slate-800 px-6 py-4">
            <h2 classname="text-lg font-semibold">User list</h2>
          </div>
          <div classname="overflow-x-auto">
            <table classname="min-w-full divide-y divide-slate-800 text-sm">
              <thead classname="bg-slate-950/70 text-left text-slate-300">
                <tr>
                  <th classname="px-6 py-3 font-medium">First Name</th>
                  <th classname="px-6 py-3 font-medium">Last Name</th>
                  <th classname="px-6 py-3 font-medium">Username</th>
                  <th classname="px-6 py-3 font-medium">Email</th>
                  <th classname="px-6 py-3 font-medium">Phone</th>
                  <th classname="px-6 py-3 font-medium">DOB</th>
                  <th classname="px-6 py-3 font-medium">Gender</th>
                  <th classname="px-6 py-3 font-medium">Created At</th>
                </tr>
              </thead>
              <tbody
                id="usersTableBody"
                classname="divide-y divide-slate-800 text-slate-200"
              >
                <tr>
                  <td classname="px-6 py-4">Loading...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </body>
  );
}
export default Dashboard;
