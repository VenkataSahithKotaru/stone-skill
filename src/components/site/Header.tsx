import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const links = [
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Work", to: "/work", hash: undefined },
  { label: "Before & After", to: "/", hash: "before-after" },
  { label: "Contact", to: "/", hash: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const light = !scrolled && !open && pathname === "/";


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-colors duration-500 sm:px-8",
          light && "text-primary-foreground",
        )}
      >
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight">
            {site.craftsmanName}
          </span>
          <span
            className={cn("eyebrow mt-1 text-[0.6rem]", light && "text-primary-foreground/70")}
          >
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className={cn(
                "relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                light
                  ? "text-primary-foreground/80 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="contact"
            className={cn(
              "hidden rounded-sm px-5 py-2.5 text-sm transition-colors md:inline-flex",
              light
                ? "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                : "bg-primary text-primary-foreground hover:bg-accent",
            )}
          >
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-sm border md:hidden",
              light
                ? "border-primary-foreground/40 text-primary-foreground"
                : "border-border text-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm text-muted-foreground last:border-none"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
