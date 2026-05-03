
export function About() {
  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-24">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondaryBg border border-black/10 dark:border-white/10 mb-10">
          <span className="text-xs font-bold text-textSecondary uppercase tracking-[0.2em] pt-0.5">About</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-foreground leading-tight">
          My Journey &amp;&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Vision
          </span>
        </h2>
      </div>

      <div className="space-y-8 max-w-5xl w-full">
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="glass-panel rounded-3xl p-10 bg-secondaryBg/50">
            <h3 className="text-3xl font-handwritten text-foreground mb-6">Who I Am</h3>
            <p className="text-textSecondary leading-relaxed mb-6 font-mono text-sm uppercase tracking-wide">
              I&apos;m MD Auntor Rahman — a full-stack developer passionate about building smooth, efficient, and user-focused web applications.
            </p>
            <p className="text-textSecondary leading-relaxed font-mono text-sm uppercase tracking-wide">
              I work with the MERN stack to transform ideas into scalable, real-world products, from backend logic to modern interfaces. I believe great software should feel simple and intuitive, so I focus on performance, user experience, and continuous growth.
            </p>
          </div>
        </div>
        {/* Stats row */}
        <div data-aos="fade-up" data-aos-delay="400" className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1", label: "Years Experience" },
              { value: "5+", label: "Projects" },
              { value: "-", label: "Happy Clients" },
              { value: "-", label: "Lighthouse Score" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel rounded-3xl p-8 text-center bg-secondaryBg/50 hover:border-[#D946EF]/30 transition-all duration-500">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#A855F7] block mb-2">
                  {stat.value}
                </span>
                <span className="text-textSecondary text-xs font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
