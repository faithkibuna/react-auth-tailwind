import { Link } from "react-router";

function Login() {
  return (
    <form
      id="login"
      className="mt-8 w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
    >
      <p id="errorMessage" className="text-red-500" />
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required=""
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none ring-0 transition focus:border-cyan-400"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required=""
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Login
      </button>
      <p className="text-center text-sm text-slate-400">
        New here?{" "}
        <Link
          to="/register"
          className="font-medium text-cyan-400 hover:text-cyan-300"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}

export default Login;
