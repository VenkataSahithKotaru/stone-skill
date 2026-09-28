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
  Home,
  Mountain,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";
import projectFloorImg from "@/assets/project-floor.jpg";
import marbleImg from "@/assets/project-marble-floor.jpg";
import heroImage from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { site, beforeAfter, testimonials, realEstateServices, properties, images } from "@/data/site";
import { SampleBadge } from "./Gallery";
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
            Craftsmanship,
            <br />
            Quality &amp; Experience.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Professional tile, marble and granite work, along with trusted
            real estate and property services.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Tiles", "Marble", "Granite", "Real Estate"].map((t) => (
              <span
                key={t}
                className="rounded-sm border border-primary-foreground/30 px-3 py-1.5 text-[0.65rem] tracking-[0.2em] text-primary-foreground/85 uppercase"
              >
                {t}
              </span>
            ))}
          </div>
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
            One trusted professional for tile, marble, granite &amp; property
            services
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
              alt={`${site.craftsmanName} at work`}
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
                With {site.yearsOfExperience} of hands-on work, he has learned
                that good results come from doing the basics properly: plan the
                layout, set every piece level, and take the time that good
                finishing needs — whether the material is tile, marble or
                granite.
              </p>
              <p>
                From bathrooms and kitchens to marble floors, granite counters
                and staircases, the focus stays the same — clean alignment, neat
                joints and edges, and durable work that holds up for years.
                Alongside the craftsmanship, he also helps people with
                property-related matters, bringing the same honesty and
                straightforward communication.
              </p>
              <ul className="grid grid-cols-2 gap-2 pt-2 text-sm text-foreground">
                {["Tile work", "Marble work", "Granite work", "Property / real estate"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check className="size-4 text-accent" strokeWidth={1.8} /> {x}
                  </li>
                ))}
              </ul>
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

const serviceGroups = [
  {
    icon: Grid2x2,
    title: "Tile Work",
    text: "Professional tile installation with careful alignment, spacing, leveling and finishing for residential and other projects.",
    items: ["Floor tile installation", "Wall tile installation", "Bathroom tiling", "Kitchen backsplash", "Decorative tile work", "Tile repair and replacement"],
  },
  {
    icon: Gem,
    title: "Marble Work",
    text: "Quality marble fitting and installation with attention to alignment, joints, edges and finishing.",
    items: ["Marble flooring", "Marble wall installation", "Marble fitting", "Staircase marble work", "Marble finishing", "Custom marble applications"],
  },
  {
    icon: Mountain,
    title: "Granite Work",
    text: "Professional granite fitting and installation for kitchens, floors, stairs and other applications.",
    items: ["Granite flooring", "Kitchen countertops", "Granite slabs", "Staircase granite work", "Granite fitting", "Granite finishing"],
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    text: "Practical help and guidance for people buying or selling property.",
    items: realEstateServices,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          intro="From detailed tile and stone installation to property services, I bring practical experience, attention to detail, and a commitment to quality to every project."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {serviceGroups.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-clay/30 sm:p-10">
                <s.icon className="size-6 text-accent transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const highlightCards = [
  { icon: Grid2x2, title: "Tiles", text: "Precision tile installation and finishing.", image: projectFloorImg, to: "/work" as const, hash: undefined },
  { icon: Gem, title: "Marble", text: "Professional marble fitting and finishing.", image: marbleImg, to: "/work" as const, hash: undefined },
  { icon: Layers, title: "Granite", text: "Granite fitting for kitchens, floors, stairs and more.", image: images.stockGranite, to: "/work" as const, hash: undefined },
  { icon: Home, title: "Real Estate", text: "Property and real estate assistance.", image: images.stockProperty, to: "/" as const, hash: "real-estate" },
];

export function ServiceHighlights() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {highlightCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <Link
              to={c.to}
              {...(c.hash ? { hash: c.hash } : {})}
              className="group block h-full overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img src={c.image} alt="" loading="lazy" width={1280} height={960} className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                <SampleBadge />
              </div>
              <div className="p-6">
                <c.icon className="size-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-sm tracking-[0.2em] uppercase">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-accent">
                  {c.hash ? "Learn more" : "See the work"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function RealEstate() {
  const [formOpen, setFormOpen] = useState(false);
  const field = "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
  return (
    <section id="real-estate" className="scroll-mt-24 border-y border-border bg-stone-soft/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[6fr_5fr] lg:items-end">
          <SectionHeading
            eyebrow="Property Services"
            title="Real Estate & Property Services"
            intro="Looking for a property or need assistance with a property transaction? Get in touch to discuss your requirements."
          />
          <Reveal delay={100}>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              {realEstateServices.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} /> {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {properties.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {properties.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card">
                  <div className="relative">
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" width={1280} height={960} className="aspect-4/3 w-full object-cover" />
                    ) : (
                      <div className="flex aspect-4/3 w-full items-center justify-center bg-secondary text-muted-foreground">
                        <Home className="size-8" strokeWidth={1.2} />
                      </div>
                    )}
                    {p.isSample && <SampleBadge />}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="eyebrow">{p.type}</span>
                    <h3 className="mt-2 text-xl">{p.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" /> {p.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <button type="button" onClick={() => { setFormOpen(true); document.getElementById("property-form")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-5 self-start text-sm text-accent hover:underline">
                      Enquire about this property →
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs text-muted-foreground">Placeholder cards — no properties are listed yet.</p>

        <div id="property-form" className="mt-14 scroll-mt-28">
          {!formOpen ? (
            <button type="button" onClick={() => setFormOpen(true)} className="rounded-sm bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lift">
              Enquire About Property
            </button>
          ) : (
            <form
              className="max-w-3xl rounded-sm border border-border bg-card p-7 sm:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                const d = new FormData(e.currentTarget);
                const body = ["name", "phone", "requirement", "location", "type", "budget", "message"]
                  .map((k) => `${k[0].toUpperCase() + k.slice(1)}: ${d.get(k) || "-"}`)
                  .join("\n");
                window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Property enquiry")}&body=${encodeURIComponent(body)}`;
              }}
            >
              <h3 className="text-2xl">Property enquiry</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="eyebrow">Name</span><input required name="name" className={field} /></label>
                <label className="block"><span className="eyebrow">Phone</span><input required name="phone" type="tel" className={field} /></label>
                <label className="block">
                  <span className="eyebrow">Requirement</span>
                  <select required name="requirement" className={field} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Buy</option><option>Sell</option><option>Guidance</option><option>Other</option>
                  </select>
                </label>
                <label className="block"><span className="eyebrow">Preferred location</span><input name="location" className={field} /></label>
                <label className="block">
                  <span className="eyebrow">Property type</span>
                  <select name="type" className={field} defaultValue="">
                    <option value="">Select…</option>
                    <option>House</option><option>Apartment</option><option>Land / Plot</option><option>Commercial</option><option>Other</option>
                  </select>
                </label>
                <label className="block"><span className="eyebrow">Budget (optional)</span><input name="budget" className={field} /></label>
                <label className="block sm:col-span-2"><span className="eyebrow">Message</span><textarea name="message" rows={4} className={`${field} resize-none`} /></label>
              </div>
              <button type="submit" className="mt-6 rounded-sm bg-accent px-7 py-3.5 text-sm text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                Send property enquiry
              </button>
              <p className="mt-3 text-xs text-muted-foreground">This opens your email app with the message ready to send.</p>
            </form>
          )}
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
    text: "Every completed project is treated as a reflection of his work.",
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
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/75">
            Tile, marble, granite or property — share what you have in mind and a rough timeline —
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
                "Enquiry",
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
