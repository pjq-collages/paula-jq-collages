import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { collections, getNeighbors, getWorkBySlug } from "@/data/works";

export const Route = createFileRoute("/oeuvre/$slug")({
  loader: ({ params }) => {
    const work = getWorkBySlug(params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    const work = loaderData?.work;
    if (!work) {
      return { meta: [{ title: "Œuvre introuvable — Paula JQ Collages" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${work.title} — Paula JQ Collages`;
    return {
      meta: [
        { title },
        { name: "description", content: work.description },
        { property: "og:title", content: title },
        { property: "og:description", content: work.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm text-muted-foreground">Cette œuvre n'existe pas.</p>
      <Link to="/" className="text-link text-sm">
        Retour aux posters
      </Link>
    </div>
  ),
  component: WorkPage,
});

function WorkPage() {
  const { work } = Route.useLoaderData();
  const { prev, next } = getNeighbors(work);
  const collection = collections[work.collection];

  return (
    <article key={work.slug} className="fade-in mx-auto max-w-[1600px] px-6 pt-4 md:px-12">
      <div className="flex justify-center">
        <img
          src={work.image}
          alt={work.title}
          width={1024}
          height={1280}
          className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
        />
      </div>

      <div className="mx-auto mt-14 max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{work.title}</h1>
        <p className="mt-6 text-[15px] italic leading-relaxed">{work.description}</p>

        <dl className="mt-8 flex flex-col items-center gap-1 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <dt>Papier :</dt>
            <dd className="text-foreground">{work.paper}</dd>
          </div>
          <div className="flex gap-2">
            <dt>Format :</dt>
            <dd className="text-foreground">{work.format}</dd>
          </div>
        </dl>
      </div>

      <nav
        aria-label="Navigation entre les œuvres"
        className="mx-auto mt-20 grid max-w-3xl grid-cols-3 items-center text-sm"
      >
        <div className="justify-self-start">
          {prev && (
            <Link to="/oeuvre/$slug" params={{ slug: prev.slug }} className="nav-link">
              ← <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Précédente</span>
            </Link>
          )}
        </div>
        <div className="justify-self-center">
          <Link to={collection.path} className="text-link whitespace-nowrap">
            {collection.label}
          </Link>
        </div>
        <div className="justify-self-end text-right">
          {next && (
            <Link to="/oeuvre/$slug" params={{ slug: next.slug }} className="nav-link">
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Suivante</span> →
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
