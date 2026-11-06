import { createFileRoute } from "@tanstack/react-router";
import { about, aboutImages, aboutImagesAlt } from "@/data/content";

// 1 ou 2 photos maximum dans le bandeau.
const images = aboutImages.slice(0, 2);

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
    <div className="fade-in">
      <section className="mx-auto max-w-2xl px-6 pt-10 md:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{about.pageTitle}</h1>
      </section>

      {images.length > 0 && (
        <div className="mt-10 flex w-full flex-col md:mt-14 md:flex-row">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={aboutImagesAlt[i] ?? ""}
              width={1280}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              className="block h-[45vh] w-full min-w-0 flex-1 object-cover md:h-[60vh]"
            />
          ))}
        </div>
      )}

      <section className="mx-auto max-w-2xl px-6 pt-10 md:pt-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{about.title}</h2>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-muted-foreground">{about.signature}</p>
        </div>
      </section>
    </div>
  );
}
