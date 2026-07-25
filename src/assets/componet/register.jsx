import { Link } from "react-router-dom";






import register from "../pages/register";
function Login() {
  return (
    <body className="bg-slate-950 px-4 py-10 text-slate-100">
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

        <p id="errorMessage" className="text-red-500"></p>
        <form id="registrationForm" className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              for="firstName"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label
              for="lastName"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label
              for="username"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label
              for="email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label
              for="phone"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <lable
              htmlfor="dob"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Date of Birth
            </lable>

            <input
              id="dob"
              name="dob"
              type="date"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label
              for="gender"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            >
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div>
            <label
              for="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>
          <div className="md:col-span-2">
            <label
              for="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              cdcd Create account
            </button>
            <p className="text-sm text-slate-400">
              Already a member?
              <a
                href="login.html"
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
}
export default register;
