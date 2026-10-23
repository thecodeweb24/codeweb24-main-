const pillars = [
  { title: "Strategy driven", text: "We align product, content, and conversion goals so every screen serves the business." },
  { title: "Built to scale", text: "From marketing sites to business software, we design systems that stay clean and flexible as you grow." },
  { title: "Speed with quality", text: "Performance, accessibility, and maintainability are built into the work from day one." },
  { title: "Support that lasts", text: "We stay close after launch with updates, improvements, and practical ongoing guidance." },
];

export default function Features() {
  return (
    <section id="about" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="section-label">About CODEWEB24</span>
            <h2 className="section-heading mt-6 max-w-md">
              Real digital products for ambitious businesses.
            </h2>
          </div>

          <div className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            We design and build digital experiences that do more than look polished — they help businesses generate leads, sell confidently online, and operate more efficiently every day.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="panel-surface rounded-[1.7rem] p-5">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg text-[var(--accent)]">✦</div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{pillar.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
