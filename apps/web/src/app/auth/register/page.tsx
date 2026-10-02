"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Globe,
  ArrowRight,
  Heart,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchAPI } from "@/lib/api";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Nigeria",
  "Kenya",
  "South Africa",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "Myanmar",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Thailand",
  "Philippines",
  "Russia",
  "Brazil",
  "Mexico",
  "Japan",
  "South Korea",
  "Other",
];

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  country?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const errs: FieldErrors = {};
    if (!firstName.trim()) errs.firstName = "First name is required";
    if (!lastName.trim()) errs.lastName = "Last name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!country) errs.country = "Please select your country";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetchAPI("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, firstName, lastName, country }),
      });

      const token = res.data?.token || res.token;
      if (token) {
        localStorage.setItem("medbud_token", token);
      }

      router.push("/hospitals");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again.";
      setApiError(message);
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `w-full pl-12 pr-4 py-3.5 rounded-xl border text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all text-sm ${
      errors[field]
        ? "border-red-300 focus:ring-red-500/30 focus:border-red-500 bg-red-50/40"
        : "border-gray-200 focus:ring-blue-500/30 focus:border-blue-500 bg-white"
    }`;

  return (
    <div className="min-h-screen flex">
      {/* ─── Left branding panel ─── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-600 to-violet-600 flex-col justify-between p-12 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full" />
        </div>

        {/* Top — Logo */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              MedBud
            </span>
          </Link>
        </div>

        {/* Center — Tagline */}
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-6">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Start Your
            <br />
            Healthcare
            <br />
            <span className="text-white/80">Journey Today</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-md leading-relaxed">
            Join thousands of international patients who trust MedBud for
            affordable, world-class medical care in India.
          </p>

          {/* Benefits */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              "Verified JCI & NABH hospitals",
              "Save up to 90% on treatments",
              "Dedicated care coordinator",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-100">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — Trust badges */}
        <div className="relative z-10 flex items-center gap-6">
          {[
            { icon: Shield, label: "HIPAA Compliant" },
            { icon: Star, label: "4.9/5 Rating" },
            { icon: Heart, label: "7,300+ Patients" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-4 h-4 text-white/90" />
              </div>
              <span className="text-sm font-medium text-blue-100">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Right form panel ─── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-[var(--background)]"
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
              MedBud
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Create Account
              </h2>
            </div>
            <p className="text-gray-500 mb-8">
              Join MedBud and explore top Indian hospitals
            </p>
          </motion.div>

          {/* API Error */}
          {apiError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium"
            >
              {apiError}
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className={inputClass("firstName")}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className={inputClass("lastName")}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass("email")}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  className={inputClass("password")}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`${inputClass("country")} appearance-none cursor-pointer ${
                    !country ? "text-gray-400" : ""
                  }`}
                >
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {/* Dropdown chevron */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.country && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  {errors.country}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl shadow-xl shadow-blue-500/20 text-sm disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </motion.button>
          </motion.form>

          {/* Login link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
