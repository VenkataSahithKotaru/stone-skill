import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import {
  Hero,
  About,
  Services,
  WhyChoose,
  BeforeAfterSection,
  Testimonials,
  Contact,
  SectionHeading,
} from "@/components/site/sections";

const title = "Quality Tile Work, Built to Last | Tile Installation Craftsman";
const description =
  "Portfolio of a skilled tile installer: bathrooms, kitchens, floors, walls, marble and stone. Precise installation and clean finishing for homes and businesses.";

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
        <About />
        <Services />

        <section id="work" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Work"
              intro="A selection of completed tile installations. Filter by the type of space."
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
