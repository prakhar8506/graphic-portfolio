import type { Metadata } from "next";
import Link from "next/link";
import { workHost, works, type Work } from "@/lib/works";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Works | Prakhar Jain",
  description:
    "Selected work — IITian Macro, Sarveio, Carrystyle, Sanmati Abhushan, Raiment, Xapel, thumbnails.",
};

function Cover({ work }: { work: Work }) {
  if (!work.image) {
    return (
      <div className={`work-img ${work.aspect} type-cover`}>
        <span className="label">Live</span>
        <strong>{work.title}</strong>
        <span>Current web project</span>
      </div>
    );
  }
  return (
    <div className={`work-img ${work.aspect}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={work.image} alt={work.title} />
    </div>
  );
}

export default function WorksPage() {
  return (
    <>
      <main className="works-page">
        <div className="works-page-head">
          <h1>Works</h1>
          <p>©24 . 26</p>
        </div>
        <div className="work-list">
          {works.map((work) => (
            <article key={work.slug} className="work-item">
              <h2 className="label">{work.title}</h2>
              <p className="lead">{work.tag}</p>
              {work.href ? (
                <p className="work-item-live">
                  <a href={work.href} className="work-live" target="_blank" rel="noreferrer">
                    {workHost(work.href)} ↗
                  </a>
                </p>
              ) : null}
              <Link href={`/works/${work.slug}`}>
                <Cover work={work} />
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
