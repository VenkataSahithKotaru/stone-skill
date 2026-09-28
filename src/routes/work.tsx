import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { SectionHeading } from "@/components/site/sections";

const title = "Selected Work — Tile Installation Portfolio";
const description =
  "Completed tile projects: bathrooms, kitchens, floors, feature walls, marble and stone work. Browse by category and view project details.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            intro="Completed tile installations across bathrooms, kitchens, floors, walls and stone surfaces."
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
