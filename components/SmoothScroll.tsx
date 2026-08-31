"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useSite } from "./SiteProvider";

export function SmoothScroll() {
  const { loaded, menuOpen } = useSite();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      duration: 0.72,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [loaded]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (menuOpen) lenis.stop();
    else lenis.start();
  }, [menuOpen, loaded]);

  return null;
}
