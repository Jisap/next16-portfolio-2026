"use client";

import React, { useEffect, useId, useMemo, useState } from "react";
import { Particles, initParticlesEngine, loadSlim } from "../../../lib/particles";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
}: SparklesCoreProps) => {
  const generatedId = useId();
  const containerId = id || `sparkles-${generatedId}`;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await initParticlesEngine(async (engine: any) => {
          await loadSlim(engine);
        });
      } catch (err) {
        console.warn("tsparticles init failed:", err);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: background ?? "transparent" } },
      fullScreen: { enable: false, zIndex: 1 },
      fpsLimit: 60,
      particles: {
        color: { value: particleColor ?? "#FFFFFF" },
        number: {
          density: { enable: true, width: 400, height: 400 },
          value: particleDensity ?? 500,
        },
        size: { value: { min: minSize ?? 1, max: maxSize ?? 3 } },
        move: { enable: true, speed: 1 },
        opacity: { value: { min: 0.1, max: 1 } },
      },
      detectRetina: true,
    }),
    [background, particleColor, particleDensity, minSize, maxSize]
  );

  if (!ready) {
    return <div id={containerId} className={cn("h-full w-full", className)} />;
  }

  return (
    <Particles
      id={containerId}
      className={cn("h-full w-full", className)}
      options={options}
    />
  );
};