import reverieBalneaire from "@/assets/works/reverie-balneaire.jpg";
import dameAuxOiseaux from "@/assets/works/dame-aux-oiseaux.jpg";
import jardinSuspendu from "@/assets/works/jardin-suspendu.jpg";
import luneDePapier from "@/assets/works/lune-de-papier.jpg";
import grandDepart from "@/assets/works/grand-depart.jpg";
import natureMorteBleue from "@/assets/works/nature-morte-bleue.jpg";
import ete62 from "@/assets/works/ete-62.jpg";
import fragmentsItalie from "@/assets/works/fragments-italie.jpg";
import heureDoree from "@/assets/works/heure-doree.jpg";

/**
 * Pour ajouter une œuvre : importer l'image ci-dessus, puis ajouter une entrée
 * dans `works`. Le champ `collection` décide sur quelle page elle apparaît.
 */

export type Collection = "poster" | "carte-postale" | "dibond";

export const collections: Record<
  Collection,
  { label: string; path: "/" | "/carte-postale" | "/dibond" }
> = {
  poster: { label: "Poster", path: "/" },
  "carte-postale": { label: "Carte postale", path: "/carte-postale" },
  dibond: { label: "Dibond", path: "/dibond" },
};

export type Work = {
  slug: string;
  title: string;
  collection: Collection;
  image: string;
  description: string;
  paper: string;
  format: string;
};

export const works: Work[] = [
  {
    slug: "reverie-balneaire",
    title: "Rêverie balnéaire",
    collection: "poster",
    image: reverieBalneaire,
    description:
      "Une baigneuse des années 60, un citron géant et quelques palmes : un été suspendu, découpé dans de vieux magazines.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "la-dame-aux-oiseaux",
    title: "La Dame aux oiseaux",
    collection: "poster",
    image: dameAuxOiseaux,
    description:
      "Un portrait gravé du XIXe siècle dont le regard s'envole, couvert d'oiseaux et d'hibiscus.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "jardin-suspendu",
    title: "Jardin suspendu",
    collection: "poster",
    image: jardinSuspendu,
    description:
      "Une arche antique flotte entre deux nuages, envahie par des planches botaniques.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "lune-de-papier",
    title: "Lune de papier",
    collection: "poster",
    image: luneDePapier,
    description:
      "Un couple danse sous une lune immense, sur un fond de papier bleu nuit déchiré à la main.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "le-grand-depart",
    title: "Le Grand Départ",
    collection: "poster",
    image: grandDepart,
    description:
      "Une locomotive à vapeur traverse une vieille carte de France, entre bandes rouges et montgolfière.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "nature-morte-bleue",
    title: "Nature morte bleue",
    collection: "poster",
    image: natureMorteBleue,
    description:
      "Un vase de porcelaine, des agrumes et une main qui hésite : une nature morte entièrement en bleu de cobalt.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "ete-62",
    title: "Été 62",
    collection: "poster",
    image: ete62,
    description:
      "Une bande d'amis en décapotable, des parasols rayés et un grand soleil orange.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "fragments-d-italie",
    title: "Fragments d'Italie",
    collection: "poster",
    image: fragmentsItalie,
    description:
      "Cartes postales de la côte amalfitaine, citrons, Vespa et statue romaine : un carnet de voyage en morceaux.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
  {
    slug: "l-heure-doree",
    title: "L'Heure dorée",
    collection: "poster",
    image: heureDoree,
    description:
      "Une silhouette remplie de ciel couchant, posée sur un champ de blé et des papiers ambrés.",
    paper: "Papier mat 200 g, fini velours",
    format: "30 × 40 cm",
  },
];

export function getWorksByCollection(collection: Collection): Work[] {
  return works.filter((w) => w.collection === collection);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

/** Previous / next work inside the same collection (no wrap-around). */
export function getNeighbors(work: Work): { prev: Work | undefined; next: Work | undefined } {
  const list = getWorksByCollection(work.collection);
  const i = list.findIndex((w) => w.slug === work.slug);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i < list.length - 1 ? list[i + 1] : undefined };
}
