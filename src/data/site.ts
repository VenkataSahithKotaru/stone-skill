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

/** Basic details shown in the header, contact section and footer. */
export const site = {
  craftsmanName: "[Father's Name]", // replace with his name
  tagline: "Tile Installation & Finishing",
  phone: "[Phone number]",
  email: "[Email address]",
  serviceArea: "[Service area / city]",
  hours: "[Working hours]",
};

export type ProjectCategory =
  | "Bathrooms"
  | "Kitchens"
  | "Floors"
  | "Walls"
  | "Marble & Stone"
  | "Other";

export const categories: ProjectCategory[] = [
  "Bathrooms",
  "Kitchens",
  "Floors",
  "Walls",
  "Marble & Stone",
  "Other",
];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location?: string;
  date?: string;
  image: string;
};

/** Placeholder projects — replace images and text with real work. */
export const projects: Project[] = [
  {
    id: "modern-bathroom",
    title: "Modern Bathroom",
    category: "Bathrooms",
    description:
      "Wall and floor tiling with careful layout planning around the shower area, niches and corners.",
    location: "[Location]",
    date: "[Date]",
    image: projectBathroom,
  },
  {
    id: "marble-floor",
    title: "Marble Floor",
    category: "Marble & Stone",
    description:
      "Large marble slabs set level with tight seams and a polished, continuous finish.",
    location: "[Location]",
    date: "[Date]",
    image: projectMarbleFloor,
  },
  {
    id: "kitchen-backsplash",
    title: "Kitchen Backsplash",
    category: "Kitchens",
    description:
      "Handmade ceramic backsplash with even spacing and clean cuts around fittings and outlets.",
    location: "[Location]",
    date: "[Date]",
    image: projectBacksplash,
  },
  {
    id: "residential-floor",
    title: "Residential Floor",
    category: "Floors",
    description:
      "Large-format floor tiles laid across an open living space with consistent grout lines.",
    location: "[Location]",
    date: "[Date]",
    image: projectFloor,
  },
  {
    id: "feature-wall",
    title: "Feature Wall",
    category: "Walls",
    description:
      "Textured wall tiles arranged so the pattern stays aligned from floor to ceiling.",
    location: "[Location]",
    date: "[Date]",
    image: projectWall,
  },
  {
    id: "custom-tile-work",
    title: "Custom Tile Work",
    category: "Other",
    description:
      "Decorative inlay detailing with hand-cut pieces and precise pattern matching.",
    location: "[Location]",
    date: "[Date]",
    image: projectCustom,
  },
];

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
