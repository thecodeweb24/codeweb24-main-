const services = [
  {
    title: "Website Development",
    desc: "Modern, responsive websites designed around your business goals, audience, and conversion strategy.",
    icon: "◫",
    wide: true,
  },
  {
    title: "E-Commerce",
    desc: "Online shopping experiences built to help businesses sell and manage products with confidence.",
    icon: "◌",
  },
  {
    title: "Industry Solutions",
    desc: "Tailored digital systems for specific business requirements, workflows, and service models.",
    icon: "△",
  },
  {
    title: "Custom Web Apps",
    desc: "Purpose-built applications for unique workflows, dashboards, and operational business needs.",
    icon: "▣",
  },
  {
    title: "Business Automation",
    desc: "Practical tools that reduce repetitive work and streamline operations across the business.",
    icon: "◎",
  },
  {
    title: "UI/UX & Branding",
    desc: "Thoughtful interfaces and visual identities that help brands feel more distinctive and trustworthy.",
    icon: "✦",
  },
  {
    title: "Hosting & Maintenance",
    desc: "Ongoing support to keep websites secure, reliable, high-performing, and easy to update.",
    icon: "◍",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label">What we do</span>
            <h2 className="section-heading mt-6">Boutique solutions, built for business.</h2>
          </div>

          <a href="#contact" className="secondary-btn w-fit">
            Book a consultation
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card ${service.wide ? "xl:col-span-2" : ""}`}
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(125, 158, 255, 0.08))"
                    : "rgba(255,255,255,0.06)",
              }}
            >
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="link-row">Learn more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
