import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="flex flex-col min-h-[auto] lg:min-h-screen justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-0 relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
            <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Hello</span>
          </div>
        </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-[40px] sm:text-[60px] lg:text-[72px] font-handwritten leading-tight mb-10 text-white">
          <span className="block opacity-90">Crafting Interfaces That</span>
          <span className="block opacity-90 mb-4">Users Love</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6] filter drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
            Frontend Meets Design
          </span>
        </h1>
      </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl sm:text-2xl text-white/50 max-w-3xl leading-relaxed mb-16 font-mono tracking-wide">
            I design and develop responsive, user-focused web interfaces using modern technologies. My goal is to turn complex ideas into smooth, engaging digital experiences.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contact">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-[#D946EF] to-[#A855F7] text-white border-none px-10 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:scale-105 transition-all duration-500 font-bold text-sm">
                Let&apos;s Work Together
              </Button>
            </a>
            
            <a href="/Resume.pdf" download="Resume.pdf">
              <div className="group flex items-center gap-4 bg-transparent border border-white/10 rounded-full px-8 py-4 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                <span className="text-sm font-bold text-white">Download Resume</span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
