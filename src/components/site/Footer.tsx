import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl">{site.craftsmanName}</p>
          <p className="eyebrow mt-2">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <span>{site.phone}</span>
          <span>{site.email}</span>
          <div className="mt-2 flex gap-5">
            <Link to="/work" className="transition-colors hover:text-foreground">
              Work
            </Link>
            <Link to="/" hash="contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.craftsmanName}. Residential &
          commercial tile work.
        </p>
      </div>
    </footer>
  );
}
