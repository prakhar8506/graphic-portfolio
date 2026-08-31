import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, works } from "@/lib/works";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} | Prakhar Jain`,
    description: work.tag,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const idx = works.findIndex((w) => w.slug === work.slug);
  const next = works[(idx + 1) % works.length];
  const frames = work.gallery?.length ? work.gallery : work.image ? [work.image] : [];

  return (
    <>
      <main className="case">
        <p className="label">{work.year}</p>
        <h1 className="display" style={{ marginTop: 18, fontSize: "clamp(48px, 8vw, 110px)" }}>
          {work.title}
        </h1>
        <p className="lead" style={{ marginTop: 18 }}>
          {work.tag}
        </p>
        {work.href ? (
          <p style={{ marginTop: 18 }}>
            <a href={work.href} className="work-live" target="_blank" rel="noreferrer">
              {work.href.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
            </a>
          </p>
        ) : null}
        {frames[0] ? (
          <div className="case-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={frames[0]} alt={work.title} />
          </div>
        ) : (
          <div className="case-hero type-cover">
            <strong>{work.title}</strong>
            <span>Current web project</span>
          </div>
        )}
        {frames.length > 1 ? (
          <div className="case-gallery">
            {frames.slice(1).map((src) => (
              <div key={src} className="case-gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        ) : null}
        <div className="case-grid">
          <ul className="label" style={{ lineHeight: 1.8, color: "#fff" }}>
            {work.services.map((s) => (
              <li key={s} style={{ listStyle: "none" }}>
                {s}
              </li>
            ))}
          </ul>
          <div className="case-body">
            {work.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p style={{ marginTop: 48 }}>
              <Link href={`/works/${next.slug}`} className="underline-hover">
                Next — {next.title}
              </Link>
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/works" className="underline-hover">
                All works
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
