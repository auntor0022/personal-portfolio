"use client"

import { Home, User, Briefcase, Mail, GraduationCap, Code2 } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Portfolio", href: "#portfolio" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function NavigationDock() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href)
      if (!el) return { top: 0, bottom: 0 }
      const rect = el.getBoundingClientRect()
      return { top: rect.top, bottom: rect.bottom }
    })

    const offset = window.innerHeight / 3
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].top <= offset) {
        setActiveIndex(i)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollTo = (href: string, idx: number) => {
    setActiveIndex(idx)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop — right sidebar */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="glass-panel rounded-full py-6 px-3 flex flex-col gap-6 items-center">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(item.href, idx)}
              className="relative group p-2 transition-all duration-300"
              title={item.label}
            >
              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${
                  activeIndex === idx
                    ? "text-[#D946EF]"
                    : "text-textSecondary group-hover:text-foreground"
                }`}
              />
              {activeIndex === idx && (
                <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#D946EF] rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
              )}
              {/* Tooltip */}
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-secondaryBg border border-black/10 dark:border-white/10 text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile — bottom dock */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[90%] max-w-[400px]">
        <div className="glass-panel rounded-full py-2 px-4 flex justify-between items-center bg-secondaryBg/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(item.href, idx)}
              className="relative p-2 transition-all duration-300 flex-1 flex justify-center"
            >
              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${
                  activeIndex === idx
                    ? "text-[#D946EF] scale-110"
                    : "text-textSecondary hover:text-foreground"
                }`}
              />
              {activeIndex === idx && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-[#D946EF] rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
