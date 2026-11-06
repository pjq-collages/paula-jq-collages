import { SocialLinks } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1600px] flex-col items-center gap-5 px-6 pb-12 pt-24 text-xs text-muted-foreground md:flex-row md:justify-between md:px-12">
      <p>© {new Date().getFullYear()} Paula JQ Collages</p>
      <SocialLinks className="text-foreground" />
    </footer>
  );
}
