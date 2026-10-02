import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-12 lg:p-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-400/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Free First Consultation — No Credit Card Required
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Start Your
              <br />
              Healing Journey?
            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-xl mx-auto">
              Tell us about your condition. Our AI will match you with the best hospitals and doctors in India within minutes — with transparent pricing and zero obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/hospitals" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 text-base no-underline">
                Find My Treatment Options →
              </Link>
              <button className="text-white/90 font-medium hover:text-white transition-colors text-base flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Talk to a Coordinator
              </button>
            </div>

            <p className="mt-6 text-xs text-blue-200">
              🔒 HIPAA-grade encryption · Your data is never shared without consent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
