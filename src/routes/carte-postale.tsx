import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/WorkGrid";

export const Route = createFileRoute("/carte-postale")({
  head: () => ({
    meta: [
      { title: "Carte postale — Paula JQ Collages" },
      { name: "description", content: "Les collages de Paula JQ en format carte postale." },
      { property: "og:title", content: "Carte postale — Paula JQ Collages" },
      { property: "og:description", content: "Les collages de Paula JQ en format carte postale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartePostale,
});

function CartePostale() {
  return (
    <>
      <h1 className="sr-only">Collection Carte postale</h1>
      <WorkGrid collection="carte-postale" />
    </>
  );
}
