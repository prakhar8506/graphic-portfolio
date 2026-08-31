import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PRAKHAR | Not found",
};

export default function NotFound() {
  return (
    <main className="case" style={{ minHeight: "100vh" }}>
      <h1 className="display">Nothing here.</h1>
      <p className="lead" style={{ marginTop: 24 }}>
        <Link href="/" className="underline-hover">
          Back to prakhar
        </Link>
      </p>
    </main>
  );
}
