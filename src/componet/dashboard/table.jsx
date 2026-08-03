function table() {
  return (
    <table className="min-w-full divide-y divide-slate-800 text-sm">
      <thead className="bg-slate-950/70 text-left text-slate-300">
        <tr>
          <th className="px-6 py-3 font-medium">First Name</th>
          <th className="px-6 py-3 font-medium">Last Name</th>
          <th className="px-6 py-3 font-medium">Username</th>
          <th className="px-6 py-3 font-medium">Email</th>
          <th className="px-6 py-3 font-medium">Phone</th>
          <th className="px-6 py-3 font-medium">DOB</th>
          <th className="px-6 py-3 font-medium">Gender</th>
          <th className="px-6 py-3 font-medium">Created At</th>
        </tr>
      </thead>
      <tbody
        id="usersTableBody"
        className="divide-y divide-slate-800 text-slate-200"
      >
        <tr>
          <td className="px-6 py-4">Loading...</td>
        </tr>
      </tbody>
    </table>
  );
}
export default table;
