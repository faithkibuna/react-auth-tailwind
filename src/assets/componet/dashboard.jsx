import dashboardheader from "./dasboardheader";
import dashboardtable from "./dasboardtable";
function Dashboard() {
  return (
    <body classname="min-h-screen bg-slate-950 text-slate-100">
      <div classname="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <section classname="mt-8 grid gap-6 md:grid-cols-2">
          <div classname="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <p classname="text-sm uppercase tracking-[0.25em] text-slate-400">
              Total Users
            </p>
            <p
              id="totalUsers"
              classname="mt-3 text-4xl font-semibold text-white"
            ></p>
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
          <div classname="overflow-x-auto"></div>
        </section>
      </div>
    </body>
  );
}
export default Dashboard;
