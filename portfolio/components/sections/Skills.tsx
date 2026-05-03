"use client"

import { 
  SiFigma,  
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiReact, 
  SiHtml5, 
  SiCss,
  SiPostman,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiJavascript
} from "react-icons/si";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST API", icon: SiPostman, color: "#FF6C37" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-24 overflow-hidden">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Skills</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[52px] font-handwritten mb-20 text-white leading-tight">
          My&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Superpowers
          </span>
        </h2>
      </div>

      <div className="space-y-24">
        {skillCategories.map((category, catIdx) => (
          <div key={category.title} className="relative">
            <div 
              data-aos="fade-right" 
              className="flex items-center gap-4 mb-12 px-4"
            >
              <h3 className="text-sm font-mono font-bold text-white/40 uppercase tracking-[0.4em]">
                {category.title}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {category.skills.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative flex flex-col items-center gap-5 group cursor-pointer"
                >
                  {/* Dynamic Background Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  {/* Glass Card */}
                  <div className="w-full aspect-square glass-card rounded-[2.5rem] flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-white/20">
                    <skill.icon 
                      className="w-14 h-14 transition-all duration-500 animate-float-icon" 
                      style={{ 
                        color: skill.color,
                        filter: `drop-shadow(0 0 10px ${skill.color}40)`
                      }} 
                    />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <span className="text-white/30 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-center group-hover:text-white/80 transition-all duration-300 transform group-hover:scale-110">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}



