import { createFileRoute } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PINTEREST_URL,
  InstagramIcon,
  PinterestIcon,
} from "@/components/SocialIcons";
import { contact } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Paula JQ Collages" },
      { name: "description", content: "Écrire à Paula JQ ou la suivre sur Instagram et Pinterest." },
      { property: "og:title", content: "Contact — Paula JQ Collages" },
      { property: "og:description", content: "Écrire à Paula JQ ou la suivre sur Instagram et Pinterest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="fade-in mx-auto max-w-2xl px-6 pt-10 md:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{contact.title}</h1>
      <p className="mt-10 text-[15px] leading-relaxed">{contact.intro}</p>
      <p className="mt-4 text-lg">
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
          {CONTACT_EMAIL}
        </a>
      </p>

      <ul className="mt-12 space-y-4 text-[15px]">
        <li>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 transition-opacity hover:opacity-60">
            <InstagramIcon /> Instagram
          </a>
        </li>
        <li>
          <a href={PINTEREST_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 transition-opacity hover:opacity-60">
            <PinterestIcon /> Pinterest
          </a>
        </li>
      </ul>
    </section>
  );
}
