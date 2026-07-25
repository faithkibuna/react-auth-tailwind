import React, { useState, useEffect } from "react";
import dashboardheader from "./dasboardheader";
import dashboardtable from "./dasboardtable";
function Dashboard() {
  return (
    <body className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Total Users
            </p>
            <p
              id="totalUsers"
              className="mt-3 text-4xl font-semibold text-white"
            ></p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Users this month
            </p>
            <p
              id="usersThisMonth"
              className="mt-3 text-4xl font-semibold text-white"
            >
              ...
            </p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <div className="border-b border-slate-800 px-6 py-4">
            <h2 className="text-lg font-semibold">User list</h2>
          </div>
          <div className="overflow-x-auto"></div>
        </section>
      </div>
    </body>
  );
}
export default Dashboard;
