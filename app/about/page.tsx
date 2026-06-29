"use client"


import Link from "next/link"
import { aboutPageStyles as a } from "../data/dummyStyles"





const About = () => {

  const interests = [
    "FULL-STACK DEV",
    "AI ENGINEER",
    "LLMS",
    "TRAVEL",
    "MUSIC",
    "F1",
    "READING",
  ];

  const techStack = [
    "React",
    "LLM",
    "Rails",
    "Next.js",
    "TypeScript",
    "Postgres",
    "Redis",
  ];

  const email = "jisapdev@gmail.com"

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={a.pageContainer}>
      <div className={a.contentContainer}>
        <div className={a.backgroundContainer}>
          <div className={a.backgroundContainer}>

          </div>
        </div>

      </div>

    </div>
  )
}

export default About