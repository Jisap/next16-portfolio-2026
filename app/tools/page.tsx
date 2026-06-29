"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";
import { toolsPageStyles as t } from "../data/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "Cursor",
    category: "IDE",
    icon: "/cursor.webp",
    href: "https://cursor.sh",
  },
  {
    name: "ChatGPT",
    category: "Productivity",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: "/notion.webp",
    href: "https://notion.so",
  },
  {
    name: "PyCharm",
    category: "IDE",
    icon: "/pycharm.webp",
    href: "https://jetbrains.com/pycharm",
  },
  {
    name: "VS Code",
    category: "IDE",
    icon: "/vscode.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "Slack",
    category: "Communication",
    icon: "/slack.webp",
    href: "https://slack.com",
  },
  {
    name: "Medium",
    category: "Writing",
    icon: "/medium.webp",
    href: "https://medium.com",
  },
  {
    name: "Android Studio",
    category: "IDE",
    icon: "/android.webp",
    href: "https://developer.android.com/studio",
  },
  {
    name: "Claude AI",
    category: "Productivity",
    icon: "/claude.webp",
    href: "https://claude.ai",
  },
  {
    name: "Hugging Face",
    category: "AI Platform",
    icon: "/huggingface.webp",
    href: "https://huggingface.co",
  },
  {
    name: "Gemini",
    category: "Productivity",
    icon: "/gemini.webp",
    href: "https://gemini.google.com",
  },
  {
    name: "Lovable",
    category: "Productivity",
    icon: "/lovable.webp",
    href: "https://lovable.dev",
  },
  {
    name: "Windsurf",
    category: "IDE",
    icon: "/windsurf.webp",
    href: "https://codeium.com/windsurf",
  },
  {
    name: "Perplexity",
    category: "Research",
    icon: "/perplexity.webp",
    href: "https://perplexity.ai",
  },
];

const Tools = ({ }) => {
  return (
    <div className={t.pageContainer}>
      <div className={t.contentContainer}>
        <div className={t.headerContainer}>
          <h1 className={t.headerTitle}>
            Shovels
          </h1>

          <p className={t.headerSubtitle}>
            Tools I frequently use in my daily life
          </p>
        </div>


        <div className={t.toolsGrid}>
          {tools.map((tool) => (
            <CometCard key={tool.name} className="cursor-pointer">
              <Link
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={t.toolCardLink}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <div className={t.toolIconContainer}>
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    width={56}
                    height={56}
                    className={t.toolIcon}
                  />
                </div>

                <div className={t.toolTextContainer}>
                  <h3 className={t.toolName}>
                    {tool.name}
                  </h3>

                  <p className={t.toolCategory}>
                    {tool.category}
                  </p>
                </div>
              </Link>
            </CometCard>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Tools