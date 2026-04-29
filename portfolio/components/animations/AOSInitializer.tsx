"use client"

import { useEffect } from "react"
import AOS from "aos"

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Set to false to see animations again when scrolling up
      easing: "ease-out-quad",
      offset: 50,
      mirror: true,
      anchorPlacement: 'top-bottom',
    })
    AOS.refresh()
  }, [])

  return null
}
