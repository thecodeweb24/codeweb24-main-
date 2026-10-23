const plans = [
  {
    name: "Starter",
    subtitle: "All-Inclusive",
    price: "₹5,000",
    features: ["Single Page Engineering", "1st Year Domain Included", "High-Speed Cloud Hosting", "WhatsApp Contact Form"],
    popular: false,
    cta: "Inquire Now",
  },
  {
    name: "Professional",
    subtitle: "Under",
    price: "₹15,000",
    features: ["Multi-page Architecture", "Advanced SEO Tuning", "Speed Optimization"],
    popular: true,
    cta: "Inquire Now",
  },
  {
    name: "Custom Design",
    subtitle: "Tailored",
    price: "Custom",
    features: ["Full-Stack Development", "API Integrations", "Database Systems"],
    popular: false,
    cta: "Talk to Expert",
  },
];

const starterDetails = {
  name: "Starter Website",
  price: "₹4,999",
  desc: "Perfect for small businesses and personal websites",
  features: [
    "Up to 5 Pages", "Mobile Responsive Design", "Contact Form",
    "Basic SEO Setup", "Social Media Links", "SSL Setup", "1 Month Support",
  ],
};

const addOns = [
  ["WhatsApp Integration", 499], ["Click-to-Call Button", 299], ["Google Maps Integration", 499],
  ["Advanced Contact Form", 799], ["Image Gallery", 799], ["Video Gallery", 999],
  ["Testimonials Section", 499], ["FAQ Section", 499], ["Blog Setup", 1499],
  ["Live Chat Integration", 999], ["Booking Appointment System", 2499], ["Online Payment Gateway", 2999],
  ["E-Commerce (up to 20 products)", 4999], ["Additional Product Upload", "25/product"],
  ["Customer Login System", 2499], ["Admin Dashboard", 4999], ["Lead Management CRM", 3999],
  ["Newsletter Subscription", 999], ["Email Integration", 999], ["Google Analytics Setup", 799],
  ["Search Console Setup", 799], ["Advanced SEO Setup", 2499], ["Speed Optimization", 1499],
  ["Custom Animations", 999], ["Premium Icons & Graphics", 799], ["Custom Logo Design", 1999],
  ["Business Email Setup", 999], ["Domain Setup Assistance", 499], ["Hosting Setup Assistance", 499],
  ["Multi-language Website", 2999], ["AI Chatbot", 4999], ["AI Lead Capture Form", 2999],
  ["Portfolio Section", 999], ["Team Members Section", 499], ["Career Page", 999],
  ["Event Management Page", 1499], ["Popup Lead Form", 799], ["Download Brochure Section", 499],
  ["Social Media Feed Integration", 999],
];

const maintenance = [
  { name: "Basic Maintenance", price: "₹499/month", features: ["Minor Content Changes", "Security Monitoring", "Monthly Backup"], popular: false },
  { name: "Professional Maintenance", price: "₹999/month", features: ["Everything in Basic", "Image Updates", "Blog Updates", "Priority Support"], popular: true },
  { name: "Premium Maintenance", price: "₹1,999/month", features: ["Unlimited Minor Changes", "Monthly Performance Optimization", "SEO Monitoring", "Priority WhatsApp Support"], popular: false },
];

const packages = [
  {
    name: "Silver Package", price: "₹7,999",
    features: ["Base Website", "WhatsApp Integration", "Google Maps", "Testimonials", "Gallery", "Analytics"],
    popular: false,
  },
  {
    name: "Gold Package", price: "₹11,999",
    features: ["Everything in Silver", "Blog", "Advanced SEO", "Speed Optimization", "Business Email"],
    popular: true,
  },
  {
    name: "Platinum Package", price: "₹19,999",
    features: ["Everything in Gold", "Booking System", "Payment Gateway", "AI Chatbot", "Premium Support"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-accent text-sm font-medium tracking-wider uppercase">Pricing Plans</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Transparent Tiers.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance solutions at competitive rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 ${
                plan.popular
                  ? "gradient-border bg-navy-700/50"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-accent text-white text-xs font-medium">
                  Popular
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-blue-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium text-sm transition-all ${
                    plan.popular
                      ? "bg-blue-accent hover:bg-blue-600 text-white shadow-lg shadow-blue-accent/25"
                      : "border border-white/10 hover:border-blue-accent/40 text-gray-300 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-16">
          Need a specific budget fit? Contact us for custom scaling.
        </p>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Detailed Pricing</h3>
          <p className="text-gray-400">Explore our comprehensive pricing structure with flexible options.</p>
        </div>

        <div className="space-y-16">
          <div className="glass-card rounded-xl p-8">
            <h4 className="text-xl font-semibold text-white mb-6">{starterDetails.name}</h4>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-white">{starterDetails.price}</span>
              <span className="text-gray-400 text-sm">{starterDetails.desc}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {starterDetails.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Premium Add-On Features</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 text-sm font-medium text-gray-400">Feature</th>
                    <th className="pb-3 text-sm font-medium text-gray-400 text-right">Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {addOns.map(([name, price]) => (
                    <tr key={name as string} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-2.5 text-sm text-gray-300">{name as string}</td>
                      <td className="py-2.5 text-sm text-gray-300 text-right">{price as string | number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Maintenance Plans</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {maintenance.map((m) => (
                <div
                  key={m.name}
                  className={`rounded-xl p-6 ${m.popular ? "gradient-border bg-navy-700/50" : "glass-card"}`}
                >
                  {m.popular && (
                    <span className="text-xs text-blue-accent font-medium">Popular</span>
                  )}
                  <h5 className="text-lg font-semibold text-white mt-1">{m.name}</h5>
                  <p className="text-2xl font-bold text-white mt-2">{m.price}</p>
                  <ul className="mt-4 space-y-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Recommended Packages</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl p-6 ${pkg.popular ? "gradient-border bg-navy-700/50" : "glass-card"}`}
                >
                  {pkg.popular && (
                    <span className="text-xs text-blue-accent font-medium">Best Value</span>
                  )}
                  <h5 className="text-lg font-semibold text-white mt-1">{pkg.name}</h5>
                  <p className="text-2xl font-bold text-white mt-2">{pkg.price}</p>
                  <ul className="mt-4 space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2.5 rounded-lg border border-white/10 hover:border-blue-accent/40 text-gray-300 hover:text-white text-sm font-medium transition-all">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
