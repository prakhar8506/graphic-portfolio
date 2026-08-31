"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { workHost, works } from "@/lib/works";

export function WorksPreview() {
  const [active, setActive] = useState<string | null>(null);
  const win = useRef<HTMLDivElement>(null);
  const current = works.find((w) => w.slug === active);

  const move = (e: React.MouseEvent) => {
    const el = win.current;
    if (!el) return;
    const x = Math.min(e.clientX + 36, window.innerWidth - 340);
    const y = Math.min(e.clientY + 18, window.innerHeight - 240);
    el.style.transform = `translate3d(${x}px, ${Math.max(16, y)}px, 0)`;
  };

  return (
    <section className="works" id="works" onMouseMove={move}>
      <div className="works-intro">
        <h2>
          Good brands communicate.
          <br />
          Great brands surprise.
        </h2>
      </div>

      <ul
        className="work-titles"
        onMouseLeave={() => setActive(null)}
      >
        {works.map((work) => (
          <li key={work.slug}>
            <div
              className="work-title-link"
              onMouseEnter={() => setActive(work.slug)}
            >
              <span className="label">{work.year}</span>
              <div className="work-title-block">
                <Link href={`/works/${work.slug}`} className="work-title">
                  {work.title}
                </Link>
                {work.href ? (
                  <a
                    href={work.href}
                    className="work-live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {workHost(work.href)} ↗
                  </a>
                ) : null}
              </div>
              <span className="work-tag">{work.tag}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="works-foot">
        <Link href="/works" className="underline-hover">
          View all
        </Link>
        <span className="works-count">( {String(works.length).padStart(2, "0")} )</span>
        <span>© 24 . 26</span>
      </div>

      <div
        ref={win}
        className={`work-window${active && current ? " is-on" : ""}`}
        aria-hidden
      >
        {current?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={current.image} alt="" />
        ) : current ? (
          <div className="work-window-type">
            <strong>{current.title}</strong>
            <span>{current.tag}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
