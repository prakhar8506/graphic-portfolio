import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-cta">
        <p className="label" style={{ color: "#8e8e8e" }}>
          Prakhar Jain
        </p>
        <h2 className="display">
          Let’s work
          <br />
          together.
        </h2>
        <p className="lead" style={{ maxWidth: "28ch", marginTop: 8 }}>
          Graphic, UI/UX, web, web-app, iOS &amp; Android, video and thumbnails.
          Third year, S.A.T.I. Vidisha.
        </p>
        <div className="footer-actions">
          <a href={`mailto:${site.email}`} className="underline-hover">
            {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="underline-hover">
            {site.phoneDisplay}
          </a>
        </div>
        <div className="footer-socials">
          <a
            href={site.socials.instagram}
            className="underline-hover"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={site.socials.drive}
            className="underline-hover"
            target="_blank"
            rel="noreferrer"
          >
            Drive
          </a>
        </div>
        <div className="footer-socials" style={{ marginTop: 18 }}>
          {site.live.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="underline-hover"
              target="_blank"
              rel="noreferrer"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-credits">
        <p>©2026 — Prakhar Jain, S.A.T.I. Vidisha</p>
        <p>Graphic · UI/UX · Web &amp; apps · Motion</p>
        <p>@uiux.prakhar</p>
        <p>EN</p>
      </div>
    </footer>
  );
}
