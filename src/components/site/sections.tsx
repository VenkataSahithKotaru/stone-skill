import { Link } from "@tanstack/react-router";
import {
  Grid2x2,
  LayoutPanelTop,
  ShowerHead,
  UtensilsCrossed,
  Gem,
  Wrench,
  Ruler,
  Hammer,
  Clock,
  Heart,
  Phone,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { site, beforeAfter, testimonials } from "@/data/site";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Finished marble tile work in a sunlit bathroom"
          width={1920}
          height={1280}
          className="hero-zoom size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/55 to-primary/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-primary-foreground/70">
            {site.tagline}
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">
            Quality Tile Work,
            <br />
            Built to Last.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Professional tile installation and finishing with attention to
            detail, precision, and craftsmanship.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="rounded-sm bg-accent px-7 py-3.5 text-sm text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              View My Work
            </Link>
            <Link
              to="/"
              hash="contact"
              className="rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              Get in Touch
            </Link>
          </div>
          <p className="mt-10 text-xs tracking-[0.18em] text-primary-foreground/70 uppercase">
            Experienced Tile Work • Residential &amp; Commercial • Quality
            Craftsmanship
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[5fr_6fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden size-full rounded-sm border border-clay lg:block" />
            <img
              src={portrait}
              alt={`${site.craftsmanName}, tile craftsman at work`}
              loading="lazy"
              width={1200}
              height={1504}
              className="relative w-full rounded-sm object-cover shadow-soft"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About" title="Meet the Craftsman" />
          <Reveal delay={120}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Tiling is hands-on work, and it shows in the finish. Over years
                of working with tile, stone and ceramic, he has built a simple
                way of working: plan the layout properly, set every piece level,
                and take the time that good finishing needs.
              </p>
              <p>
                From bathrooms and kitchens to floors and feature walls, the
                focus stays the same — clean alignment, even spacing, neat edges
                and corners, and durable installation that holds up for years.
                Customers get straight answers, a tidy site, and work completed
                the way it was agreed.
              </p>
            </div>
            <blockquote className="mt-9 border-l-2 border-accent pl-6 text-xl leading-relaxed sm:text-2xl">
              “Every project is a reflection of my work, so I believe in doing
              it right.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Grid2x2,
    title: "Floor Tile Installation",
    text: "Professional installation of floor tiles with careful leveling, spacing, and finishing.",
  },
  {
    icon: LayoutPanelTop,
    title: "Wall Tile Installation",
    text: "Clean and precise wall tile installation for kitchens, bathrooms, and other spaces.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Tiling",
    text: "Complete bathroom tiling with attention to layout, edges, corners, and finishing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Backsplash",
    text: "Tile installation for kitchen walls, backsplashes, and decorative areas.",
  },
  {
    icon: Gem,
    title: "Marble & Stone Work",
    text: "Installation and finishing of marble, stone, and other premium surfaces where applicable.",
  },
  {
    icon: Wrench,
    title: "Tile Repair & Replacement",
    text: "Replacement and repair of damaged or worn tiles.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          intro="Tile work for homes and commercial spaces, handled start to finish."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-clay/40">
                <s.icon
                  className="size-6 text-accent transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.4}
                />
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const qualities = [
  {
    icon: Ruler,
    title: "Attention to Detail",
    text: "Careful alignment, spacing, edges, and finishing.",
  },
  {
    icon: Hammer,
    title: "Quality Workmanship",
    text: "A focus on clean and durable installation.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    text: "Professional communication and commitment to completing work properly.",
  },
  {
    icon: Heart,
    title: "Pride in Every Project",
    text: "Every completed project is treated as a reflection of his craftsmanship.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why his work" title="Craftsmanship You Can See" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualities.map((q, i) => (
            <Reveal key={q.title} delay={i * 90}>
              <div className="group h-full rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-sm bg-clay/60 text-clay-foreground transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <q.icon className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-lg">{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {q.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="scroll-mt-24 bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title="Before & After"
          intro="The same space, before the work started and after it was finished."
        />
        <div className="mt-14 space-y-14">
          {beforeAfter.map((pair) => (
            <Reveal key={pair.id}>
              <div className="rounded-sm border border-border bg-card p-5 sm:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  {(["before", "after"] as const).map((k) => (
                    <figure key={k} className="group relative overflow-hidden rounded-sm">
                      <img
                        src={pair[k]}
                        alt={`${pair.title} — ${k}`}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                      />
                      <figcaption className="absolute left-4 top-4 rounded-sm bg-primary/85 px-3 py-1.5 text-[0.65rem] tracking-[0.2em] text-primary-foreground uppercase">
                        {k}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl">{pair.title}</h3>
                  {pair.note && (
                    <p className="mt-2 text-sm text-muted-foreground">{pair.note}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="In Their Words"
          intro="Placeholder space reserved for real customer feedback."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <figure className="h-full rounded-sm border border-dashed border-border bg-card p-8">
                <Quote className="size-5 text-accent" strokeWidth={1.5} />
                <blockquote className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="eyebrow mt-6">{t.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-primary-foreground/60">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Let&apos;s talk about your tiling project.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/75">
            Share the space, the tiles you have in mind, and a rough timeline —
            you&apos;ll get an honest answer about what the work involves.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-4 transition-colors hover:text-accent"
            >
              <Phone className="size-4" strokeWidth={1.6} /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 transition-colors hover:text-accent"
            >
              <Mail className="size-4" strokeWidth={1.6} /> {site.email}
            </a>
            <p className="flex items-center gap-4 text-primary-foreground/75">
              <MapPin className="size-4" strokeWidth={1.6} /> {site.serviceArea}
            </p>
            <p className="flex items-center gap-4 text-primary-foreground/75">
              <Clock className="size-4" strokeWidth={1.6} /> {site.hours}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="rounded-sm bg-card p-7 text-foreground sm:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
              window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
                "Tiling enquiry",
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <h3 className="text-2xl">Request a quote</h3>
            <div className="mt-6 space-y-4">
              {[
                { name: "name", label: "Your name", type: "text" },
                { name: "phone", label: "Phone or email", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="eyebrow">{f.label}</span>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
              ))}
              <label className="block">
                <span className="eyebrow">About the project</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-sm bg-accent px-6 py-3.5 text-sm text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Send enquiry
              </button>
              <p className="text-xs text-muted-foreground">
                This opens your email app with the message ready to send.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
