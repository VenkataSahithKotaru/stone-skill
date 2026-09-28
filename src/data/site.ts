/**
 * ─────────────────────────────────────────────────────────────
 * EDIT THIS FILE TO UPDATE THE WEBSITE CONTENT.
 * Everything below (name, contact details, projects, before &
 * after pairs, testimonials) is plain data — no coding needed.
 *
 * To swap a photo: drop your image into `src/assets/`, then
 * add an import at the top of this file and use it below.
 * ─────────────────────────────────────────────────────────────
 */

import projectBathroom from "@/assets/project-bathroom.jpg";
import projectMarbleFloor from "@/assets/project-marble-floor.jpg";
import projectBacksplash from "@/assets/project-backsplash.jpg";
import projectFloor from "@/assets/project-floor.jpg";
import projectWall from "@/assets/project-wall.jpg";
import projectCustom from "@/assets/project-custom.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import stockGranite from "@/assets/stock-granite.jpg";
import stockProperty from "@/assets/stock-property.jpg";

/** Basic details shown in the header, contact section and footer. */
export const site = {
  craftsmanName: "[Father's Name]", // replace with his name
  tagline: "Tiles • Marble • Granite • Real Estate",
  yearsOfExperience: "[Years of Experience]", // e.g. "25+"
  phone: "[Phone number]",
  email: "[Email address]",
  serviceArea: "[Service area / city]",
  hours: "[Working hours]",
};

export type ProjectCategory =
  | "Tiles"
  | "Marble"
  | "Granite"
  | "Interior / Finishing"
  | "Real Estate";

export const categories: ProjectCategory[] = [
  "Tiles",
  "Marble",
  "Granite",
  "Interior / Finishing",
  "Real Estate",
];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location?: string;
  date?: string;
  image: string;
  /** Optional before photo of the same space (image = after). */
  before?: string;
  /**
   * true = decorative/sample image, NOT his actual work.
   * Set to false (or remove) once you replace the photo with a real one.
   */
  isSample?: boolean;
};

/** Placeholder projects — replace images and text with real work. */
export const projects: Project[] = [
  {
    id: "modern-bathroom",
    title: "Modern Bathroom",
    category: "Tiles",
    description:
      "Wall and floor tiling with careful layout planning around the shower area, niches and corners.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectBathroom,
  },
  {
    id: "marble-floor",
    title: "Marble Floor",
    category: "Marble",
    description:
      "Large marble slabs set level with tight seams and a polished, continuous finish.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectMarbleFloor,
  },
  {
    id: "kitchen-backsplash",
    title: "Kitchen Backsplash",
    category: "Tiles",
    description:
      "Handmade ceramic backsplash with even spacing and clean cuts around fittings and outlets.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectBacksplash,
  },
  {
    id: "residential-floor",
    title: "Residential Floor",
    category: "Tiles",
    description:
      "Large-format floor tiles laid across an open living space with consistent grout lines.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectFloor,
  },
  {
    id: "feature-wall",
    title: "Feature Wall",
    category: "Interior / Finishing",
    description:
      "Textured wall tiles arranged so the pattern stays aligned from floor to ceiling.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectWall,
  },
  {
    id: "custom-tile-work",
    title: "Custom Tile Work",
    category: "Interior / Finishing",
    description:
      "Decorative inlay detailing with hand-cut pieces and precise pattern matching.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: projectCustom,
  },
  {
    id: "granite-countertop",
    title: "Granite Countertop",
    category: "Granite",
    description:
      "Granite slab fitted on a kitchen counter with clean edges and tight joints.",
    location: "[Location]",
    date: "[Date]",
    isSample: true,
    image: stockGranite,
  },
];

/* ───────────── Real estate ───────────── */

/**
 * Real estate services — edit these lines to match exactly what he offers.
 * No licenses or credentials are claimed here.
 */
export const realEstateServices: string[] = [
  "Property buying assistance",
  "Property selling assistance",
  "Property-related guidance",
  "Residential properties",
  "Land / plots",
  "Property connections",
  "[Add specific real estate services here]",
];

export type Property = {
  id: string;
  title: string;
  type: string; // e.g. "House", "Plot", "Apartment"
  location: string;
  description: string;
  image?: string;
  isSample?: boolean;
};

/**
 * Property cards. These are PLACEHOLDERS — not real listings.
 * Replace with real properties (or leave the list empty to hide the cards).
 */
export const properties: Property[] = [
  {
    id: "property-1",
    title: "[Property title]",
    type: "[Property type]",
    location: "[Location]",
    description: "Property details will appear here once available.",
    image: stockProperty,
    isSample: true,
  },
  {
    id: "property-2",
    title: "[Property title]",
    type: "[Property type]",
    location: "[Location]",
    description: "Property details will appear here once available.",
  },
  {
    id: "property-3",
    title: "[Property title]",
    type: "[Property type]",
    location: "[Location]",
    description: "Property details will appear here once available.",
  },
];

export const images = { stockGranite, stockProperty };

export type BeforeAfter = {
  id: string;
  title: string;
  note?: string;
  before: string;
  after: string;
};

/** Replace with real paired photos of the same space. */
export const beforeAfter: BeforeAfter[] = [
  {
    id: "bathroom-transformation",
    title: "Bathroom Transformation",
    note: "[Add a short note about this project]",
    before: beforeBathroom,
    after: afterBathroom,
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

/**
 * Placeholders only — no real testimonials yet.
 * Replace the quote and author once you have permission to publish them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Customer testimonial will appear here.",
    author: "[Customer name]",
  },
  {
    id: "t2",
    quote: "Customer testimonial will appear here.",
    author: "[Customer name]",
  },
  {
    id: "t3",
    quote: "Customer testimonial will appear here.",
    author: "[Customer name]",
  },
];
