"use client"

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

// Base project data without the layout type
const baseProjects = [
  {
    title: "WorldWatch - Newspaper Platform",
    category: "Full Stack (MERN)",
    description: "A full-featured newspaper platform with authentication, premium subscriptions, and admin dashboard. Built with React, Firebase, Node.js, Express, and MongoDB. Includes Stripe payments, JWT security, article management, analytics charts, and role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Stripe", "JWT"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    link: "https://world-watch-app.web.app/",
  },
  {
    title: "Ink.Link - Library Management System",
    category: "Full Stack (MERN)",
    description: "A full-stack library management system that enables users to browse, borrow, and manage books with secure authentication. Features Firebase auth, JWT-protected routes, real-time borrowing system, and a responsive UI with smooth animations.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "JWT", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    link: "https://ink-link-7f9d0.web.app/",
  },
  {
    title: "Plant Mates - Gardening Community Platform",
    category: "Full Stack (MERN)",
    description: "A community-driven gardening platform where users can share tips, explore local gardeners, and discover trending content. Includes authentication, CRUD operations, like system, filtering, and a fully responsive UI with smooth animations.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    link: "https://plant-mates-app.web.app/",
  },
];

// The 4 distinct card layouts to randomly assign
const layoutTypes = ["featured", "overlay", "minimal", "standard"];

export function Portfolio() {
  const [projects, setProjects] = useState<(typeof baseProjects[0] & { type: string })[]>([]);

  useEffect(() => {
    // 1. Shuffle the projects array
    const shuffledProjects = [...baseProjects].sort(() => Math.random() - 0.5);

    // 2. Shuffle the layout types
    const shuffledLayouts = [...layoutTypes].sort(() => Math.random() - 0.5);

    // 3. Assign a random layout to each project
    const randomizedProjects = shuffledProjects.map((project, index) => ({
      ...project,
      type: shuffledLayouts[index % shuffledLayouts.length],
    }));

    setProjects(randomizedProjects);
  }, []);

  return (
    <section id="portfolio" className="px-6 sm:px-12 lg:px-24 py-24 min-h-screen">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Portfolio</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-white leading-tight">
          Featured&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Projects
          </span>
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl transition-all duration-1000 md:grid-flow-row-dense">
        {projects.map((project, i) => {
          if (project.type === "featured") {
            // Distinct style: prominent image, distinct background for text
            return (
              <div key={project.title} data-aos="fade-up" data-aos-delay={100 * i} className="md:col-span-1 h-full">
                <a href={project.link} className="group flex flex-col h-full glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#D946EF]/30 bg-[#0a0a0a]/50">
                  <div className="aspect-video min-h-[250px] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <ExternalLink className="absolute top-6 right-6 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex flex-col flex-1 bg-[#050505]/80 border-t border-white/5">
                    <span className="text-xs font-bold text-[#D946EF] mb-4 uppercase tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D946EF] transition-colors duration-300">{project.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-8 flex-1 line-clamp-3 font-medium">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            );
          }

          if (project.type === "overlay") {
            // Distinct style: full image with dark overlay
            return (
              <div key={project.title} data-aos="fade-up" data-aos-delay={100 * i} className="md:col-span-1 h-full">
                <a href={project.link} className="group block h-full min-h-[400px] rounded-3xl overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,70,239,0.2)] border border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs font-bold text-[#A855F7] mb-3 uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2 font-medium">{project.description}</p>
                    <ExternalLink className="absolute top-6 right-6 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              </div>
            );
          }

          if (project.type === "minimal") {
            // Distinct style: abstract background, large typography
            return (
              <div key={project.title} data-aos="fade-up" data-aos-delay={100 * i} className="md:col-span-1 h-full">
                <a href={project.link} className="group flex flex-col h-full min-h-[400px] glass-panel rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:border-[#D946EF]/30 bg-[#0a0a0a]/50">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D946EF]/10 rounded-full blur-[60px] group-hover:bg-[#D946EF]/20 transition-colors duration-500"></div>
                  <ExternalLink className="absolute top-8 right-8 w-5 h-5 text-textSecondary group-hover:text-white transition-colors duration-300" />

                  <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-12">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#D946EF] transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-auto line-clamp-3 font-medium">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-bold text-white/30 bg-black/50 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </a>
              </div>
            );
          }

          // Distinct style: standard vertical layout
          return (
            <div key={project.title} data-aos="fade-up" data-aos-delay={100 * i} className="md:col-span-1 h-full">
              <a href={project.link} className="group flex flex-col h-full glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#D946EF]/30 bg-[#0a0a0a]/50">
                <div className="aspect-[4/3] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-secondaryBg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-bold text-[#D946EF] mb-2 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D946EF] transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
