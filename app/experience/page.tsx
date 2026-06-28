"use client"

import {
  Award,
  Briefcase,
  Code2,
  Code2Icon,
  GraduationCap,
  Medal,
  Rocket,
  Users,
} from "lucide-react";
import Link from "next/link";
import { timelineStyles as s } from "../data/dummyStyles";
import { Timeline } from "../components/ui/timeline";

const TimelineDemo = () => {

  const data = [
    {
      title: "2025 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base">Senior Full-Stack Developer - Kai Digital Studio</h3>
              <p className={s.contentTitle}>
                Building scalable SaaS platforms and AI-powered tools
              </p>
              <p className={s.contentSubtitle}>
                Remote • International Clients
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Developed enterprise-grade web applications used by thousands of users
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Integrated AI workflows to automate content generation and customer support
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Led frontend architecture and performance optimization initiatives
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Node.js</span>
          </div>
        </div>
      )
    },

    {
      title: "2023 - 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Briefcase className={s.iconPurple} />
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base">Frontend Engineer - PixelForge Agency</h3>
              <p className={s.contentTitle}>
                Creating modern interfaces for startups and growing businesses
              </p>
              <p className={s.contentSubtitle}>
                Hybrid • Madrid, Spain
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Built responsive marketing websites and custom dashboards
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Collaborated with designers to improve accessibility and usability
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Reduced page load times through code splitting and optimization
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Vite</span>
            <span className={s.techBadge}>TailwindCSS</span>
            <span className={s.techBadge}>Figma</span>
          </div>
        </div>
      )
    },

    {
      title: "2022 - 2023",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Code2 className={s.iconGreen} />
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base">Full-Stack Developer - CloudSync Technologies</h3>
              <p className={s.contentTitle}>
                Developing cloud-based productivity applications
              </p>
              <p className={s.contentSubtitle}>
                Remote
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Designed REST APIs and backend services for collaborative tools
            </li>
            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Implemented authentication, permissions, and real-time features
            </li>
            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Participated in agile development and code review processes
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Express</span>
            <span className={s.techBadge}>PostgreSQL</span>
            <span className={s.techBadge}>Docker</span>
          </div>
        </div>
      )
    },

    {
      title: "2020 - 2022",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <GraduationCap className={s.iconAmber} />
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base">Computer Science Student</h3>
              <p className={s.contentTitle}>
                Focused on software engineering and web technologies
              </p>
              <p className={s.contentSubtitle}>
                Personal Projects & Open Source
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Built personal SaaS projects and developer tools
            </li>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Contributed to open-source repositories
            </li>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Learned modern frontend and backend development practices
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>JavaScript</span>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Git</span>
            <span className={s.techBadge}>Firebase</span>
          </div>
        </div>
      )
    },

    {
      title: "Key Achievements",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Medal className={s.iconGreen} />
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base">Milestones & Recognition</h3>
              <p className={s.contentTitle}>
                Significant achievements across the journey
              </p>
            </div>
          </div>

          <div className={s.achievementGrid}>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Funding Raised</div>
              <div className={s.achievementCardValue}>$100K+</div>
              <div className={s.achievementCardSub}>From accelerators & investors</div>
            </div>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Users Served</div>
              <div className={s.achievementCardValue}>33M+</div>
              <div className={s.achievementCardSub}>Across all platforms</div>
            </div>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Startups Founded</div>
              <div className={s.achievementCardValue}>3</div>
              <div className={s.achievementCardSub}>As Co-Founder/CTO</div>
            </div>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Years Experience</div>
              <div className={s.achievementCardValue}>5+</div>
              <div className={s.achievementCardSub}>Building at scale</div>
            </div>
          </div>

          <div className={s.specializationContainer}>
            <div className={s.specializationTitle}>Specializations</div>
            <div className={s.specializationBadgesContainer}>
              <span className={s.specializationBadge}>AI/ML Applications</span>
              <span className={s.specializationBadge}>Startup Scaling</span>
              <span className={s.specializationBadge}>Full-Stack Development</span>
              <span className={s.specializationBadge}>Team Leadership</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <span className={s.timelineBadge}>Career Timeline</span>

          <h1 className={s.mainTitle}>Changelog from my journey</h1>

          <p className={s.mainParagraph}>
            I&apos;ve been working at kay.ai for the past 1.5 years.
            <br className="hidden sm:block" />
            Here&apos;s a timeline of my journey across multiple startups and projects.
          </p>

          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}>Current Role</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-purple-500`}></div>
              <span className={s.legendText}>AI Startup</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-green-500`}></div>
              <span className={s.legendText}>Early career</span>
            </div>
          </div>
        </div>

        <Timeline data={data} />

        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2Icon className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
              <p className={s.techSectionSubtitle}>Full-stack expertise across the modern tech stack</p>
            </div>
          </div>

          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Frontend</div>
              <div className={s.techCardContent}>React, TypeScript, Tailwind, Next.js</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textEmerald}`}>Backend</div>
              <div className={s.techCardContent}>Node.js, GoLang, Rails, Python</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textPurple}`}>AI/ML</div>
              <div className={s.techCardContent}>OpenAI, LangChain, Vector DBs</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textAmber}`}>Databases</div>
              <div className={s.techCardContent}>PostgreSQL, MongoDB, Redis, TimescaleDB</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textRose}`}>Cloud & DevOps</div>
              <div className={s.techCardContent}>Docker, AWS, Google Cloud, Vercel</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Tools</div>
              <div className={s.techCardContent}>Figma, Jira, Git, Agile/Scrum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineDemo;