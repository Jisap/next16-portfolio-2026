"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { homePageStyles, spotlightStyles } from "./data/dummyStyles";
import { Spotlight } from "./components/ui/spotlight";
import { Cover } from "./components/ui/cover";
import { PointerHighlight } from "./components/ui/pointer-highlight";

export default function Home(): React.ReactElement {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .catch(
          (e) => { console.log("Autoplay prevented:", e) }
        )
    }
  }, [])

  return (
    <>
      <div className={homePageStyles.container}>
        <div className={cn(
          homePageStyles.backgroundGrid.wrapper,
          homePageStyles.backgroundGrid.pattern
        )}
        />
        <Spotlight
          className={spotlightStyles.position}
          fill="#0FFF50"
        />

        <div className={homePageStyles.gradientOverlay} />

        <section className={homePageStyles.heroSection}>
          <div className="relative">
            <h1 className={homePageStyles.spanWithMargin}>
              <Cover>JisapDev</Cover>
            </h1>

            <h2 className={homePageStyles.h2}>
              AI Product {"  "}
              <span className={homePageStyles.spanInline}>
                <PointerHighlight pointerClassName="text-green-500">
                  Engineer
                </PointerHighlight>
              </span>
            </h2>

            <div className="mb-6">
              <div className={homePageStyles.calloutCard.wrapper}>
                <div className={homePageStyles.calloutCard.innerContainer}>
                  <div className={homePageStyles.calloutCard.textContainer}>
                    <svg
                      className={homePageStyles.calloutCard.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className={homePageStyles.calloutCard.button}>
                      Connect with me on X
                    </div>
                  </div>

                  <button
                    type="button"
                    aira-label="Follow on X"
                    className={homePageStyles.calloutCard.button}
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>

            <p className={homePageStyles.paragraph}>
              I turn fuzzy ideas into live Products (<em>quickly</em>) — full-stack AI Builder. Currently working as a Founding Engineer at{" "}
              <a className={homePageStyles.link} href="https://invoicegenerator-frontend-tdng.onrender.com/">
                Invoice-AI
              </a>
              . I have built multiple products in past 5 years; raised $100K funding for my startup{" "}
              <a className={homePageStyles.link} href="#">
                hexagondigitalservices.com
              </a>
            </p>

            <article className={homePageStyles.article.wrapper}>
              <div className={homePageStyles.article.videoContainer}>
                <video
                  ref={videoRef}
                  className={homePageStyles.article.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                  style={homePageStyles.article.videoStyles}
                >
                  <source src="/homevideo.webm" type="video/webm" />
                  Your browser does not support the video tag.

                </video>
              </div>
            </article>
          </div>
        </section>
      </div>




    </>
  );
}
