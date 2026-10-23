const stats = [
  { value: "0", suffix: "/100", label: "Lighthouse Score" },
  { value: "<0", suffix: "s", label: "Avg. Load Time" },
  { value: "0", suffix: "%", label: "Uptime Security" },
];

const steps = [
  {
    num: "01",
    title: "Architecture Design",
    desc: 'We don\'t just "make websites." We engineer scalable systems that handle traffic without breaking.',
  },
  {
    num: "02",
    title: "Clean Code Dev",
    desc: "Readable, maintainable, and highly optimized code that search engines and browsers love.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-accent text-sm font-medium tracking-wider uppercase">Engineering Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just &ldquo;make websites.&rdquo; We engineer scalable systems that handle traffic without breaking.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="lg:col-span-1 glass-card rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-white">
                {s.value}<span className="text-blue-accent">{s.suffix}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="glass-card rounded-xl p-8 relative overflow-hidden">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-accent/20 to-cyan-light/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-accent">{step.num}</span>
                </div>
                <div>
                  <p className="text-xs text-blue-accent font-medium mb-1">
                    Step {step.num}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
