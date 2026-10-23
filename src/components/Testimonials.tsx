const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, Techyogi",
    text: "CODEWEB24 delivered an outstanding automation portal for us. The speed, design, and attention to detail exceeded our expectations. It felt like a premium product from day one.",
  },
  {
    name: "Priya Patel",
    role: "CEO, Design n Prints",
    text: "Working with CODEWEB24 was a game-changer for our business. They captured our brand identity and turned it into an elegant digital storefront that sells with confidence.",
  },
  {
    name: "Amit Verma",
    role: "CTO, SnapShot",
    text: "The engineering quality is exceptional. The platform is fast, well structured, and deeply considered. This is exactly what a modern business tech partner should feel like.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading mt-6 mx-auto max-w-2xl">What clients say after launch.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="quote-card">
              <div className="stars" aria-label="5-star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={`${item.name}-${index}`} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <blockquote>“{item.text}”</blockquote>

              <div>
                <p className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-[var(--muted)]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
