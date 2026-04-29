"use client"

import { useState, useEffect } from "react";
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
  SiFirebase
} from "react-icons/si";

const baseSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB", percent: "95%" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", percent: "98%" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", percent: "95%" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", percent: "96%" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", percent: "88%" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF", percent: "85%" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", percent: "82%" },
  { name: "REST API", icon: SiPostman, color: "#FF6C37", percent: "90%" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", percent: "85%" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", percent: "80%" },
];

export function Skills() {
  const [skills, setSkills] = useState(baseSkills);

  useEffect(() => {
    // Shuffle the skills array on mount
    const shuffled = [...baseSkills].sort(() => Math.random() - 0.5);
    setSkills(shuffled);
  }, []);

  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-24">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Skills</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-white leading-tight">
          My&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Superpowers
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 max-w-5xl">
        {skills.map((skill, i) => (
          <div key={skill.name} data-aos="fade-up" data-aos-delay={100 * i} className="flex flex-col items-center">
            <div className="w-full aspect-square bg-[#0c0c0c]/80 backdrop-blur-md rounded-[2rem] border border-white/5 flex flex-col items-center justify-center gap-6 group transition-all duration-500 hover:border-[#D946EF]/30 hover:-translate-y-2 mb-4">
              <skill.icon 
                className="w-14 h-14 transition-transform duration-500 group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
              <span className="text-white font-mono font-bold text-lg">{skill.percent}</span>
            </div>
            <span className="text-white/50 text-xs font-mono font-bold uppercase tracking-wider">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
