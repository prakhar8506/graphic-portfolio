import { site } from "@/lib/site";

export function Manifesto() {
  return (
    <section className="manifesto" id="ideas">
      <h2 className="display">
        Most brands produce content.
        <br />
        I prefer ideas.
      </h2>
      <div className="manifesto-aside">
        <p style={{ margin: "0 0 16px" }}>( The step aside )</p>
        <p style={{ margin: 0 }}>
          In a world of infinite images, the rare thing is
          clarity. Interfaces defend ideas, motion shifts
          perception, and brands change how people
          see the world.
        </p>
      </div>
    </section>
  );
}
