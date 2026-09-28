import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import {
  Hero,
  ServiceHighlights,
  RealEstate,
  About,
  Services,
  WhyChoose,
  BeforeAfterSection,
  Testimonials,
  Contact,
  SectionHeading,
} from "@/components/site/sections";

const title = "Tiles, Marble, Granite & Real Estate | Craftsmanship & Property Services";
const description =
  "One trusted professional for tile, marble and granite installation, plus real estate and property assistance. See completed work and get in touch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <About />
        <Services />

        <section id="work" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Work"
              intro="Completed tile, marble and granite work. Images marked “Sample image” are placeholders, not his actual work."
            />
            <div className="mt-14">
              <Gallery />
            </div>
            <div className="mt-12">
              <Link
                to="/work"
                className="inline-flex rounded-sm border border-border px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Open the full gallery
              </Link>
            </div>
          </div>
        </section>

        <WhyChoose />
        <BeforeAfterSection />
        <RealEstate />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
