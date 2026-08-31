import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { WorksPreview } from "@/components/WorksPreview";
import { StudioVideo } from "@/components/StudioVideo";
import { Studio } from "@/components/Studio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <WorksPreview />
      <StudioVideo />
      <Studio />
      <Footer />
    </main>
  );
}
