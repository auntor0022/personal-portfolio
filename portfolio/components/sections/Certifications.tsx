import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    year: "2024",
    description: "Completed an intensive web development program covering HTML, CSS, JavaScript, and React, with hands-on experience building real-world projects.",
    link: "https://drive.google.com/file/d/17EK1TbRrGG7F47RxsDrM0SbinUJ-maaq/view?usp=sharing",
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="px-6 sm:px-12 lg:px-24 py-24">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondaryBg border border-black/10 dark:border-white/10 mb-10">
          <span className="text-xs font-bold text-textSecondary uppercase tracking-[0.2em] pt-0.5">Certifications</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-foreground leading-tight">
          My&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Certifications
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {certifications.map((cert, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={150 * i}>
            <div className="glass-panel rounded-2xl p-8 h-full flex flex-col relative group hover:border-[#D946EF]/30 transition-all duration-500 bg-secondaryBg/50">
              
              <div className="w-12 h-12 rounded-full bg-background border-2 border-[#D946EF] flex items-center justify-center mb-6">
                <Award className="w-5 h-5 text-[#D946EF]" />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-[#D946EF] transition-colors duration-300 mb-1">{cert.title}</h3>
                <p className="text-[#D946EF] text-sm font-bold">{cert.organization}</p>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-textSecondary uppercase tracking-wider">
                  <Calendar className="w-3 h-3" />{cert.year}
                </span>
              </div>

              <p className="text-textSecondary text-sm leading-relaxed font-medium flex-1 mb-8">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-[#D946EF] transition-colors duration-300 self-start group/btn"
              >
                View Certificate
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
