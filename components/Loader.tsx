"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useSite } from "./SiteProvider";

function pad(n: number) {
  return String(Math.round(n)).padStart(3, "0");
}

export function Loader() {
  const pathname = usePathname();
  const { loaded, setLoaded } = useSite();
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLParagraphElement>(null);
  const skip = pathname !== "/";

  useEffect(() => {
    if (loaded || skip) {
      if (skip) setLoaded(true);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLoaded(true);
      return;
    }

    document.documentElement.classList.add("lenis-stopped");
    const obj = { n: 0 };
    const failSafe = window.setTimeout(() => {
      document.documentElement.classList.remove("lenis-stopped");
      setLoaded(true);
    }, 2400);

    const tl = gsap.timeline({
      onComplete: () => {
        window.clearTimeout(failSafe);
        document.documentElement.classList.remove("lenis-stopped");
        setLoaded(true);
      },
    });

    tl.fromTo(mark.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
    tl.to(
      obj,
      {
        n: 100,
        duration: 0.85,
        ease: "power2.inOut",
        onUpdate: () => {
          if (count.current) count.current.textContent = pad(obj.n);
        },
      },
      0.1,
    );
    tl.to(root.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "+=0.12");

    return () => {
      window.clearTimeout(failSafe);
      tl.kill();
    };
  }, [loaded, setLoaded, skip]);

  if (loaded || skip) return null;

  return (
    <div ref={root} className="loader" aria-hidden>
      <p ref={mark} className="loader-word">
        PRAKHAR
      </p>
      <div ref={count} className="loader-count">
        000
      </div>
    </div>
  );
}
