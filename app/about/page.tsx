"use client"


import Link from "next/link"
import { aboutPageStyles as a } from "../data/dummyStyles"
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";





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
            <BackgroundBeamsWithCollision>

              <div className={a.contentWrapper}>
                <h1 className={a.mainHeading}>
                  JisapDev
                </h1>

                <div className={a.interestsContainer}>
                  {interests.map((interest, index) => (
                    <span key={index} className={a.interestItem}>
                      {interest}
                      {index < interests.length - 1 && <span className={a.interestSeparator}>•</span>}
                    </span>
                  ))}
                </div>

                <div className={a.techStackContainer}>
                  {techStack.map((tech) => (
                    <span key={tech} className={a.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Content Section  */}
                <div className={a.sectionsContainer}>
                  {/* Who I Am */}
                  <section>
                    <h2 className={a.sectionHeading}>Who I Am</h2>
                    <p className={a.paragraph}>
                      Hello! I&apos;m Virat, a Bengaluru-based engineer passionate
                      about building tools that simplify people&apos;s lives.
                      I&apos;ve been coding since 2018, writing about AI, LLMs,
                      frontend, backend, Rails and databases.
                    </p>
                  </section>

                  {/* What I Do */}
                  <section>
                    <h2 className={a.sectionHeading}>What I Do</h2>
                    <p className={a.paragraph}>
                      Currently a Founding Engineer at{" "}
                      <a
                        href="https://hexagondigitalservices.com"
                        className={a.contentLink}
                      >
                        Hexagon Digital Services
                      </a>
                      , building workflow automation for insurance brokers. I focus
                      on building practical, user-facing products - less demo
                      energy, more things people actually use daily.
                    </p>
                  </section>

                  {/* My Journey */}
                  <section>
                    <h2 className={a.sectionHeading}>My Journey</h2>
                    <p className={a.paragraph}>
                      Co-founder of Hexagon Digital Services, Engagebud and
                      Influencerbit — led product development and design across
                      multiple startups. Recently shipped AI Invoive Generator (100+
                      daily users), an WEB AI TOOL, and several micro-builds,
                      keeping the shipping momentum going.
                    </p>
                  </section>

                  {/* Vision */}
                  <section>
                    <h2 className={a.sectionHeading}>Vision</h2>
                    <p className={a.paragraph}>
                      LLMs and AI will automate the mundane and reshape how we work.
                      I strive to stay at the forefront of this transformation.
                    </p>
                  </section>

                  {/* Beyond Code */}
                  <section>
                    <h2 className={a.sectionHeading}>Beyond Code</h2>
                    <p className={a.paragraph}>
                      Love techno & house music, follow F1 (Max), play chess, and
                      read regularly. Travelled recently to Bali, and a month in
                      Thailand/Vietnam in 2025.
                    </p>
                  </section>
                </div>

                <div className={a.ctaContainer}>
                  <Link
                    href="/contact"
                    className={a.primaryButton}
                    aria-label="Get in touch — open contact page"
                  >
                    Get in Touch
                  </Link>


                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={a.secondaryButton}
                    aria-label={`Compose email to ${email} in Gmail`}
                  >
                    <svg
                      className={a.emailIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    E-Mail
                  </a>
                </div>
              </div>
            </BackgroundBeamsWithCollision>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About