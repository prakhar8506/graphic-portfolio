"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { useSite } from "./SiteProvider";

function Slide({ children }: { children: string }) {
  return (
    <span className="link-slide">
      <span>
        <i>{children}</i>
        <i>{children}</i>
      </span>
    </span>
  );
}

export function Nav() {
  const { menuOpen, toggleMenu, setMenuOpen } = useSite();
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <header className="site-nav">
      <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        {site.name}
      </Link>
      <div className="nav-right">
        <button
          type="button"
          className={`menu-btn${menuOpen ? " is-open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <Slide>menu</Slide>
          <svg className="menu-svg" viewBox="0 0 6 6" fill="none" aria-hidden>
            <rect y="4" width="2" height="2" fill="currentColor" />
            <rect x="4" y="4" width="2" height="2" fill="currentColor" />
            <rect width="2" height="2" fill="currentColor" />
            <rect x="4" width="2" height="2" fill="currentColor" />
          </svg>
        </button>
        <nav className="menu-links" aria-label="Primary">
          <Link href={home ? "#works" : "/works"}>
            <Slide>works</Slide>
          </Link>
          <Link href={home ? "#studio" : "/#studio"}>
            <Slide>studio</Slide>
          </Link>
          <Link href={home ? "#skills" : "/#skills"}>
            <Slide>skills</Slide>
          </Link>
          <Link href={home ? "#footer" : "/#footer"}>
            <Slide>contact</Slide>
          </Link>
        </nav>
      </div>
    </header>
  );
}
