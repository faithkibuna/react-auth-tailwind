import Register from "../componet/register";
function Registerpage() {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
      <div className="mb-8 text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Create account
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Start your secure journey
        </h1>
        <p className="mt-3 text-slate-300">
          Join the platform by filling out the details below.
        </p>
      </div>
      <p id="errorMessage" className="text-red-500" />
      <Register />
    </div>
  );
}
export default Registerpage;
