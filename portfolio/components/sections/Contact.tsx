import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-24 py-24 pb-40">
      <div data-aos="fade-up">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1a1a1a] border border-white/5 mb-10">
          <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] pt-0.5">Contact</span>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-handwritten mb-16 text-white leading-tight">
          Let&apos;s Build&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#8B5CF6]">
            Together
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl">
        {/* Contact Form */}
        <FadeIn delay={0.2} className="lg:col-span-3 h-full">
          <form className="glass-panel rounded-2xl p-8 space-y-6 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm text-textSecondary block mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white-10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primaryAccent/50 focus:shadow-glow-primary/20 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-textSecondary block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white-10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primaryAccent/50 focus:shadow-glow-primary/20 transition-all duration-300 text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-textSecondary block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Frontend Project Inquiry"
                className="w-full bg-white/5 border border-white-10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primaryAccent/50 focus:shadow-glow-primary/20 transition-all duration-300 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-textSecondary block mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white-10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primaryAccent/50 focus:shadow-glow-primary/20 transition-all duration-300 text-sm resize-none"
              ></textarea>
            </div>
            <Button size="lg" className="w-full sm:w-auto shadow-glow-primary gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </FadeIn>

        {/* Contact Info */}
        <FadeIn delay={0.3} className="lg:col-span-2 h-full">
          <div className="flex flex-col gap-6 h-full">
            <div className="glass-panel rounded-2xl p-6 group hover:border-primaryAccent/30 transition-all duration-500 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow duration-500">
                <Mail className="w-5 h-5 text-primaryAccent" />
              </div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <a href="mailto:auntor0022@gmail.com" className="text-textSecondary text-sm hover:text-primaryAccent transition-colors duration-300">
                auntor0022@gmail.com
              </a>
            </div>

            <div className="glass-panel rounded-2xl p-6 group hover:border-primaryAccent/30 transition-all duration-500 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-secondaryAccent/10 border border-secondaryAccent/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(77,85,255,0.4)] transition-shadow duration-500">
                <Phone className="w-5 h-5 text-secondaryAccent" />
              </div>
              <h4 className="text-white font-bold mb-1">Phone</h4>
              <a href="tel:+8801703660796" className="text-textSecondary text-sm hover:text-secondaryAccent transition-colors duration-300">
                +88 01703-660796
              </a>
            </div>

            <div className="glass-panel rounded-2xl p-6 group hover:border-primaryAccent/30 transition-all duration-500 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow duration-500">
                <MapPin className="w-5 h-5 text-primaryAccent" />
              </div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-textSecondary text-sm">Rajshahi, Bangladesh</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
