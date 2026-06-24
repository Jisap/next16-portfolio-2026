"use client"

import { useEffect, useState } from "react"
import { TextHoverEffect } from "./ui/text-hover-effect";


const formatTime = () => new Date().toLocaleTimeString();

const Footer = () => {

  const [timeNow, setTimeNow] = useState<string>("");

  useEffect(() => {
    const initialId = window.setTimeout(() => setTimeNow(formatTime()), 0);       // se asigna un id con 0 milisegundos de delay
    const intervalId = window.setInterval(() => setTimeNow(formatTime()), 1000);  // se asigna un id con 1000 milisegundos de delay
    return () => {
      window.clearTimeout(initialId)
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <footer className="relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-300 bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5">
        <div className="text-lg cursor-pointer">Reach out →</div>
        <TextHoverEffect text="ACET" />
        <div className="text-lg">{timeNow}</div>
      </div>
    </footer>
  )
}

export default Footer