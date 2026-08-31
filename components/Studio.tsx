import { experience, services, site, skillGroups, toolLine, tools } from "@/lib/site";

export function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="studio-grid">
        <div>
          <p className="studio-kicker">( Prakhar Jain )</p>
          <p className="studio-copy">
            Third-year B.Tech at S.A.T.I. Vidisha.
            <br />
            Independent designer across graphic, UI/UX,
            <br />
            websites, web apps, iOS &amp; Android,
            <br />
            video and thumbnails.
            <br />
            <br />
            One practice —
            <br />
            from a brand to a product to a frame.
          </p>
        </div>
        <div>
          <h2 className="display">
            Forms follow
            <br />
            perspective.
          </h2>
          <div className="studio-services">
            <p>I design :</p>
            <ul>
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="studio-copy" style={{ marginTop: 40 }}>
              Perspective is where strategy
              <br />
              meets visual culture.
            </p>
          </div>
        </div>
      </div>

      <div className="exp-block" id="experience">
        <p className="studio-kicker">Experience</p>
        <ol className="exp-list">
          {experience.map((item) => (
            <li key={item.role} className="exp-item">
              <div className="exp-head">
                <h3>{item.role}</h3>
                <p className="label">{item.meta}</p>
              </div>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="skills-block" id="skills">
        <p className="studio-kicker">Skills</p>
        <div className="skills-grid">
          {skillGroups.map((col) => (
            <div key={col.group}>
              <h3>{col.group}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="tools-block" id="tools">
        <p className="studio-kicker">Tools</p>
        <div className="tools-cols">
          <div>
            <h3>craft</h3>
            <p>{tools.craft.join("  ·  ")}</p>
          </div>
          <div>
            <h3>motion</h3>
            <p>{tools.motion.join("  ·  ")}</p>
          </div>
          <div>
            <h3>ai</h3>
            <p>{tools.ai.join("  ·  ")}</p>
          </div>
          <div>
            <h3>spatial / web</h3>
            <p>{tools.extra.join("  ·  ")}</p>
          </div>
        </div>
      </div>

      <div className="tools-ticker" aria-hidden>
        <div className="tools-ticker-track">
          {[0, 1].map((copy) => (
            <p key={copy}>
              {toolLine.map((t) => (
                <span key={`${copy}-${t}`}>{t}</span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="label" style={{ marginBottom: 18 }}>
          live sites
        </h3>
        <ul className="live-row">
          {site.live.map((p) => (
            <li key={p.href}>
              <a href={p.href} target="_blank" rel="noreferrer">
                {p.name}
              </a>
              <span> — {p.tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="studio-gallery">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/works/iitian-home.jpg" alt="IITian Macro app UI" />
        </figure>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/works/raiment.jpg" alt="Raiment streetwear website" />
        </figure>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/works/thumb-weekly.jpg" alt="Weekly analysis thumbnail" />
        </figure>
      </div>
    </section>
  );
}
