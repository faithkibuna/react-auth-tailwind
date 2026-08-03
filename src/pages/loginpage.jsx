import { Link } from "react-router-dom";
import Login from "../componet/login";
function Loginpage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 lg:flex-row lg:gap-10 lg:p-12">
      <div className="max-w-md space-y-4 text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Welcome back
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Sign in to your account
        </h1>
        <p className="text-slate-300">
          Access your workspace and keep your authentication flow moving.
        </p>
      </div>

      <Login />
    </div>
  );
}
export default Loginpage;
