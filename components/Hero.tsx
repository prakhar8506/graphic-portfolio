"use client";

import { site } from "@/lib/site";
import { useSite } from "./SiteProvider";

export function Hero() {
  const { loaded } = useSite();

  return (
    <section className={`hero${loaded ? " is-ready" : ""}`} aria-label="Intro">
      <div className="hero-tl">
        <p>
          Not a style, a perspective.
          <br />
          Graphic, UI/UX, web &amp; apps.
        </p>
        <a className="pill" href={site.calendly}>
          Book a call <span aria-hidden>→</span>
        </a>
      </div>

      <h1 className="hero-word">PRAKHAR</h1>

      <div className="hero-bl">
        <p>Prakhar Jain · S.A.T.I. Vidisha</p>
      </div>

      <div className="hero-br">
        <a href={site.socials.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <span>/</span>
        <a href={site.socials.drive} target="_blank" rel="noreferrer">
          Drive
        </a>
        <span className="lang-chip">EN</span>
      </div>
    </section>
  );
}
