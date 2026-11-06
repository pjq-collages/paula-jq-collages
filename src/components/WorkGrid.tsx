import { Link } from "@tanstack/react-router";
import { getWorksByCollection, type Collection } from "@/data/works";

export function WorkGrid({ collection }: { collection: Collection }) {
  const items = getWorksByCollection(collection);

  if (items.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">Bientôt disponible.</p>
      </div>
    );
  }

  return (
    <ul className="mx-auto grid max-w-[1600px] grid-cols-1 gap-x-8 gap-y-10 px-6 pt-6 sm:grid-cols-2 md:px-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
      {items.map((work, i) => (
        <li key={work.slug} className="fade-in" style={{ animationDelay: `${i * 60}ms` }}>
          <Link
            to="/oeuvre/$slug"
            params={{ slug: work.slug }}
            className="group relative block aspect-[4/5] overflow-hidden bg-placeholder"
          >
            <img
              src={work.image}
              alt={work.title}
              loading={i < 3 ? "eager" : "lazy"}
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-overlay p-6 text-center text-base font-medium text-overlay-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {work.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
