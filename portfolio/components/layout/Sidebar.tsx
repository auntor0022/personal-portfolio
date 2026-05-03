import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6"
import Image from "next/image"

const image = "/image.png"

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/ar.zisan.69" },
  { icon: FaXTwitter, href: "https://x.com/arzisan46" },
  { icon: FaInstagram, href: "https://www.instagram.com/_aint_your/" },
  { icon: FaGithub, href: "https://github.com/auntor0022" },
]

export function Sidebar() {

  console.log(image)


  return (
    <>
      {/* Mobile Banner - Shows only on small screens */}
      <div className="lg:hidden w-full px-6 pt-16 pb-4 relative z-50">
        <div className="glass-panel rounded-[3rem] p-8 w-full flex flex-col items-start gap-8">
          {/* Profile Image Mobile - Full Width */}
          <div className="w-full aspect-square rounded-3xl overflow-hidden relative border border-black/10 dark:border-white/10">
            <Image
              src={image}
              alt="MD AUNTOR RAHMAN"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full text-left">
            <h2 className="text-[32px] font-handwritten text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60">MD AUNTOR RAHMAN</h2>
            <div className="text-textSecondary text-xs font-mono uppercase tracking-[0.3em] mb-10 leading-relaxed">
              <p>Frontend Developer</p>
            </div>

            <div className="flex items-center gap-2 mb-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="">
              <a href="mailto:auntor0022@gmail.com" className="text-sm font-medium font-mono text-textSecondary border-b border-textSecondary/30 pb-0.5 hover:text-foreground hover:border-foreground transition-all">
                auntor0022@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <aside className="fixed left-0 top-0 h-screen w-[480px] xl:w-[550px] p-8 flex-col justify-center hidden lg:flex z-50">
        <div className="glass-panel rounded-[2rem] p-8 w-full flex flex-col items-center h-full max-h-[900px]">
          {/* Profile Image - Large Square */}
          <div className="w-full aspect-square rounded-3xl overflow-hidden mb-8 relative border border-black/10 dark:border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <Image
              src={image}
              alt="MD AUNTOR RAHMAN"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="w-full text-left mb-8">
            <h2 className="text-4xl font-handwritten mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60">
              MD AUNTOR RAHMAN
            </h2>
            <p className="text-textSecondary text-sm font-mono uppercase tracking-[0.2em] leading-relaxed">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 w-full mb-8">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-secondaryBg/50 text-foreground hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 backdrop-blur-md h-12 w-12 transition-all duration-500 ease-out"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Contact Footer */}
          <div className="w-full text-left mt-auto pb-4">
            <a
              href="mailto:auntor0022@gmail.com"
              className="text-textSecondary hover:text-foreground transition-colors duration-300 relative group text-lg inline-block font-mono"
            >
              auntor0022@gmail.com
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black-10 dark:bg-white/20 transition-all duration-300 group-hover:bg-primaryAccent group-hover:shadow-glow-primary"></span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
