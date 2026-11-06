import { createFileRoute } from "@tanstack/react-router";
import { about } from "@/data/content";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Paula JQ Collages" },
      { name: "description", content: "Paula JQ, artiste collagiste : ciseaux, colle et vieux magazines." },
      { property: "og:title", content: "À propos — Paula JQ Collages" },
      { property: "og:description", content: "Paula JQ, artiste collagiste : ciseaux, colle et vieux magazines." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="fade-in mx-auto max-w-2xl px-6 pt-10 md:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{about.title}</h1>
      <div className="mt-10 space-y-5 text-[15px] leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-muted-foreground">{about.signature}</p>
      </div>
    </section>
  );
}
