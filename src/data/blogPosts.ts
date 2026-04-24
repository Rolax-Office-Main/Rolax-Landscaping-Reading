export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  subCategory: string;
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "professional-landscape-design-reading",
    title: "Transform Your Property with Professional Landscaping Design",
    excerpt:
      "Learn how strategic design, plant selection, and hardscape planning can improve curb appeal and property value.",
    content:
      "Professional landscaping design combines layout planning, drainage control, seasonal planting, and hardscape integration to create outdoor spaces that are beautiful and easy to maintain. At Rolax, we begin with site analysis, then build a design that supports your long-term goals and budget. We focus on practical details like traffic flow, sunlight exposure, and low-maintenance materials for Reading, PA weather.",
    image: "/images/blog/1.jpg",
    category: "Design",
    subCategory: "Landscaping",
    date: "2025-10-25",
    author: "Rolax Team",
  },
  {
    slug: "instant-green-lawn-sod-installation",
    title: "Achieve an Instant Green Lawn with Professional Sod Installation",
    excerpt:
      "A complete guide to choosing, preparing, and installing sod for a healthy, durable lawn in GTA climates.",
    content:
      "Sod installation is the fastest way to establish a healthy lawn. The key is proper grading, quality topsoil, and initial watering schedules during the first few weeks. Our team prepares the soil base, installs fresh sod rolls, and provides clear aftercare instructions so your lawn roots successfully and stays vibrant throughout the season.",
    image: "/images/blog/2.jpg",
    category: "Lawn Care",
    subCategory: "Sod Installation",
    date: "2025-10-28",
    author: "Rolax Team",
  },
  {
    slug: "strategic-tree-installation-property-value",
    title: "Enhance Your Property Value with Strategic Tree Installation",
    excerpt:
      "Discover where and how to plant trees for shade, privacy, energy savings, and long-term landscape value.",
    content:
      "Tree installation improves privacy, shade, and long-term aesthetics when done with a plan. Species selection, spacing, and placement are critical for healthy growth and safety. We help homeowners choose suitable trees for local soil and climate conditions, then install with proper staking, mulch depth, and watering plans for successful establishment.",
    image: "/images/blog/3.jpg",
    category: "Planting",
    subCategory: "Tree Installation",
    date: "2025-10-30",
    author: "Rolax Team",
  },
];
