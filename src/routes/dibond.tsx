import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/WorkGrid";

export const Route = createFileRoute("/dibond")({
  head: () => ({
    meta: [
      { title: "Dibond — Paula JQ Collages" },
      { name: "description", content: "Les collages de Paula JQ imprimés sur Dibond." },
      { property: "og:title", content: "Dibond — Paula JQ Collages" },
      { property: "og:description", content: "Les collages de Paula JQ imprimés sur Dibond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dibond,
});

function Dibond() {
  return (
    <>
      <h1 className="sr-only">Collection Dibond</h1>
      <WorkGrid collection="dibond" />
    </>
  );
}
