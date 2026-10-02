import Link from "next/link";

const footerLinks = {
  "For Patients": [
    { label: "Find Hospitals", href: "#" },
    { label: "Treatment Categories", href: "#treatments" },
    { label: "Cost Calculator", href: "#" },
    { label: "Second Opinion", href: "#" },
    { label: "Visa Assistance", href: "#" },
    { label: "Patient Stories", href: "#" },
  ],
  "For Hospitals": [
    { label: "Partner with MedBud", href: "#" },
    { label: "Hospital Dashboard", href: "#" },
    { label: "Quality Standards", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Medical Disclaimer", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">MedBud</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              AI-powered medical tourism platform making world-class Indian healthcare accessible to everyone.
            </p>
            <div className="flex items-center gap-3">
              {["X", "in", "fb", "ig"].map((social) => (
                <button key={social} className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors font-medium">
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MedBud Health Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              All systems operational
            </div>
            <span className="text-xs text-gray-500">🇮🇳 Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
