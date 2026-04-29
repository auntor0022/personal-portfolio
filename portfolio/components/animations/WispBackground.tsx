"use client"

import { useEffect, useRef, useState } from "react"

type BgType = "network" | "floaters" | "mesh" | "orbs" | "lines"

export function WispBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [bgType, setBgType] = useState<BgType | null>(null)

  useEffect(() => {
    const types: BgType[] = ["network", "floaters", "mesh", "orbs", "lines"]
    const lastType = localStorage.getItem("lastBgType")
    
    // Pick a new type that isn't the last one
    const available = types.filter(t => t !== lastType)
    const nextType = available[Math.floor(Math.random() * available.length)]
    
    setBgType(nextType)
    localStorage.setItem("lastBgType", nextType)
  }, [])

  useEffect(() => {
    if (!bgType) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 200,
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      init()
    }

    class Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      vx: number
      vy: number
      size: number
      color: string
      angle: number
      speed: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.baseX = this.x
        this.baseY = this.y
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.02 + 0.01

        const colors = ["rgba(217, 70, 239, 0.4)", "rgba(168, 85, 247, 0.4)", "rgba(139, 92, 246, 0.4)"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        if (bgType === "mesh") {
          // Mesh follows a grid but reacts to mouse
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            this.x -= (dx / dist) * force * 5
            this.y -= (dy / dist) * force * 5
          } else {
            this.x += (this.baseX - this.x) * 0.05
            this.y += (this.baseY - this.y) * 0.05
          }
        } else if (bgType === "orbs") {
          this.angle += this.speed
          this.x += Math.cos(this.angle) * 0.5
          this.y += Math.sin(this.angle) * 0.5
          
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            this.x -= (dx / dist) * 2
            this.y -= (dy / dist) * 2
          }
        } else {
          // Default particle flow
          this.x += this.vx
          this.y += this.vy

          if (this.x < 0 || this.x > width) this.vx *= -1
          if (this.y < 0 || this.y > height) this.vy *= -1

          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            this.vx -= (dx / dist) * force * 0.1
            this.vy -= (dy / dist) * force * 0.1
          }
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        if (bgType === "orbs") {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 10)
          gradient.addColorStop(0, this.color)
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.arc(this.x, this.y, this.size * 10, 0, Math.PI * 2)
        } else {
          ctx.fillStyle = this.color
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        }
        ctx.fill()
      }
    }

    let particles: Particle[] = []

    const init = () => {
      particles = []
      let count = 0
      if (bgType === "mesh") {
        const spacing = 60
        for (let x = 0; x < width; x += spacing) {
          for (let y = 0; y < height; y += spacing) {
            const p = new Particle()
            p.x = x; p.y = y; p.baseX = x; p.baseY = y
            particles.push(p)
          }
        }
      } else {
        count = Math.floor((width * height) / (bgType === "orbs" ? 30000 : 15000))
        for (let i = 0; i < count; i++) {
          particles.push(new Particle())
        }
      }
    }

    const drawLines = () => {
      if (!ctx) return
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          let limit = 150
          if (bgType === "lines") limit = 250
          if (bgType === "mesh") limit = 80

          if (dist < limit) {
            const opacity = 1 - (dist / limit)
            ctx.strokeStyle = `rgba(217, 70, 239, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      if (bgType !== "floaters") {
        drawLines()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", resize)

    resize()
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [bgType])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        {bgType === "mesh" && (
           <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        )}
        {bgType === "lines" && (
           <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>
        )}
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Global Ambient Glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-[#D946EF]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[#8B5CF6]/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  )
}
