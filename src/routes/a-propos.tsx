import { createFileRoute } from "@tanstack/react-router";

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
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">À propos</h1>
      <div className="mt-10 space-y-5 text-[15px] leading-relaxed">
        <p>
          Paula JQ est une artiste collagiste française. Elle découpe, déchire et assemble des
          fragments de magazines anciens, de cartes postales et de planches botaniques pour composer
          des images à la fois familières et étranges.
        </p>
        <p>
          Chaque collage est d'abord réalisé à la main, au ciseau et à la colle, sur papier. Les
          originaux sont ensuite numérisés puis imprimés en poster, en carte postale ou sur Dibond.
        </p>
        <p className="text-muted-foreground">Elle vit et travaille en France.</p>
      </div>
    </section>
  );
}
