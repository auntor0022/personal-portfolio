
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Varendra University, Rajshahi",
    period: "2022 - 2026 (Ongoing)",
    location: "Rajshahi, Bangladesh",
    description: "Focused on software engineering fundamentals, algorithms, and user-centric design. Gained hands-on experience building scalable web applications and collaborative systems.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Naogaon Government College",
    period: "2018 - 2020",
    location: "Naogaon, Rajshahi, Bangladesh",
    description: "Completed Higher Secondary Certificate (HSC) in Science, building a strong foundation in Mathematics, Physics, and Chemistry.",
  },
];

export function Education() {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-24">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Education</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-white leading-tight">
          Academic&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Background
          </span>
        </h2>
      </div>

      <div className="max-w-4xl space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#D946EF] via-[#A855F7] to-transparent hidden sm:block"></div>

        {education.map((item, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={150 * i}>
            <div className="glass-panel rounded-2xl p-8 sm:pl-20 relative group hover:border-[#D946EF]/30 transition-all duration-500 bg-[#0a0a0a]/50">
              {/* Timeline dot */}
              <div className="absolute left-4 top-10 w-[18px] h-[18px] rounded-full bg-secondaryBg border-2 border-[#D946EF] shadow-[0_0_15px_rgba(217,70,239,0.5)] hidden sm:flex items-center justify-center">
                <GraduationCap className="w-2.5 h-2.5 text-[#D946EF]" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D946EF] transition-colors duration-300">{item.degree}</h3>
                  <p className="text-[#D946EF] text-sm font-bold">{item.institution}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/40 uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />{item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/40 uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />{item.location}
                  </span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
