import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, projects, type Project } from "@/data/site";
import { Reveal } from "./Reveal";

const filters = ["All", ...categories] as const;

export function Gallery() {
  const [active, setActive] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible: Project[] = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => ((i ?? 0) + 1) % visible.length);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => ((i ?? 0) - 1 + visible.length) % visible.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, visible.length]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setActive(f);
              setOpenIndex(null);
            }}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm transition-all duration-300",
              active === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 70}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full break-inside-avoid overflow-hidden rounded-sm bg-card text-left shadow-soft transition-all duration-500 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
              </div>
              <div className="p-5">
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-2 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 inline-flex size-10 items-center justify-center rounded-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) - 1 + visible.length) % visible.length);
            }}
            className="absolute left-3 inline-flex size-11 items-center justify-center rounded-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) + 1) % visible.length);
            }}
            className="absolute right-3 inline-flex size-11 items-center justify-center rounded-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            className="max-h-[88vh] w-full max-w-5xl overflow-auto rounded-sm bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[62vh] w-full object-contain bg-secondary"
            />
            <div className="p-6 sm:p-8">
              <span className="eyebrow">{current.category}</span>
              <h3 className="mt-2 text-2xl">{current.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {current.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-6 text-xs text-muted-foreground">
                {current.location && (
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-3.5" /> {current.location}
                  </span>
                )}
                {current.date && (
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="size-3.5" /> {current.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
