function dashboardtable() {
  return (
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
  );
}
export default dashboardtable;
