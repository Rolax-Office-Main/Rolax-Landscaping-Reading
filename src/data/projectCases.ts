export type ProjectCase = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  image: string;
  location: string;
  service: string;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "landscaping-backyard-revamp-scarborough",
    title: "Backyard Landscaping Revamp in Scarborough",
    summary:
      "Full backyard transformation including planting beds, edging, and low-maintenance turf zones.",
    details:
      "This residential project focused on improving usability and curb appeal with a clean layout, layered planting, and improved grading for drainage. We installed fresh soil and mulch, reshaped beds, and built a maintenance-friendly design that performs well season to season.",
    image: "/images/project/landscape.jpg",
    location: "Reading, PA",
    service: "Landscaping",
  },
  {
    slug: "safe-tree-removal-reading",
    title: "Safe Tree Removal and Cleanup in Reading",
    summary:
      "Hazardous tree removal with controlled dismantling, stump prep, and full debris cleanup.",
    details:
      "Our crew handled a high-risk tree near structures and utility lines. The job included sectional dismantling, protected drop zones, and post-removal cleanup. The property was fully cleared and prepared for replanting.",
    image: "/images/project/tree-removal.jpg",
    location: "Reading, PA",
    service: "Tree Service",
  },
  {
    slug: "commercial-snow-removal-route-reading",
    title: "Commercial Snow Removal Route in Reading",
    summary:
      "Priority winter maintenance program for drive lanes, entrances, and pedestrian safety zones.",
    details:
      "For this commercial site, we delivered recurring plow and salting service with weather-triggered dispatch. The route maintained clear access during peak storms and reduced slip-risk with documented de-icing coverage.",
    image: "/images/project/snow-removal.jpeg",
    location: "Reading, PA",
    service: "Snow Removal",
  },
];
