"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useSite } from "./SiteProvider";

export function MenuOverlay() {
  const { menuOpen, setMenuOpen } = useSite();

  const close = () => setMenuOpen(false);

  return (
    <div className={`menu-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
      <div className="menu-overlay-top">
        <div className="menu-overlay-links">
          <Link href="/works" onClick={close}>
            works
          </Link>
          <Link href="/#studio" onClick={close}>
            studio
          </Link>
          <Link href="/#skills" onClick={close}>
            skills
          </Link>
        </div>
        <div className="menu-overlay-side">
          <a href={site.calendly} onClick={close} className="underline-hover">
            Let’s chat
          </a>
          <a href={`mailto:${site.email}`} onClick={close} className="underline-hover">
            drop us an email@
          </a>
          <p style={{ margin: "28px 0 4px", textAlign: "right" }}>{site.location}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span>/</span>
            <a href={site.socials.drive} target="_blank" rel="noreferrer">
              Drive
            </a>
          </div>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </div>
      </div>
      <div className="menu-overlay-foot">
        <span>EN</span>
        <span>Graphic · UI/UX · Web &amp; apps</span>
      </div>
    </div>
  );
}
