import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getWorkBySlug } from "@/data/works";

const NAV = [
  { to: "/", label: "Poster" },
  { to: "/carte-postale", label: "Carte postale" },
  { to: "/dibond", label: "Dibond" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

/** Which nav item is current — artwork pages highlight their collection. */
function useCurrentPath() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const match = pathname.match(/^\/oeuvre\/([^/]+)/);
  if (match?.[1]) {
    const work = getWorkBySlug(decodeURIComponent(match[1]));
    if (work) return work.collection === "poster" ? "/" : `/${work.collection}`;
  }
  return pathname.replace(/\/$/, "") || "/";
}

export function SiteHeader() {
  const current = useCurrentPath();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [current]);

  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-[1600px] items-center gap-10 px-6 py-7 md:px-12 md:py-10">
        <Link to="/" aria-label="Accueil" className="shrink-0">
          <img src="/logo.png" alt="PJQ Collages" className="h-7 w-auto" width={25} height={28} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="nav-link" data-current={current === item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link to="/" className="text-lg font-semibold tracking-tight md:text-xl">
            PJQ Collages
          </Link>
          <button
            type="button"
            className="-mr-1 p-1 md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Navigation mobile" className="fade-in px-6 pb-8 md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link text-base"
                  data-current={current === item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
