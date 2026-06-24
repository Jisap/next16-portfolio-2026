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
        >
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
            </div>
          </section>
        </div>



      </div>
    </>
  );
}
