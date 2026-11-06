import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/WorkGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poster — Paula JQ Collages" },
      { name: "description", content: "Collages originaux de Paula JQ, imprimés en poster : papiers découpés, images vintage et rêveries." },
      { property: "og:title", content: "Poster — Paula JQ Collages" },
      { property: "og:description", content: "Collages originaux de Paula JQ, imprimés en poster." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">Collection Poster</h1>
      <WorkGrid collection="poster" />
    </>
  );
}
