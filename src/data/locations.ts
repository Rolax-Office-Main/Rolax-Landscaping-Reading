export type LocationType = "Primary" | "Surrounding" | "Additional";

export type ServiceLocation = {
  name: string;
  description: string;
  type: LocationType;
  mapQuery: string;
};

export const toLocationSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const locationsData: ServiceLocation[] = [
  {
    name: "Reading",
    description:
      "Our headquarters. Serving central Reading with full landscaping, hardscaping, and snow removal services.",
    type: "Primary",
    mapQuery: "Reading, PA",
  },
  {
    name: "Wyomissing",
    description:
      "Premium residential landscaping and property maintenance for Wyomissing estates.",
    type: "Primary",
    mapQuery: "Wyomissing, PA",
  },
  {
    name: "West Reading",
    description:
      "Complete landscaping and tree service solutions for West Reading properties.",
    type: "Primary",
    mapQuery: "West Reading, PA",
  },
  {
    name: "Shillington",
    description:
      "Professional hardscaping, mulch installation, and seasonal maintenance in Shillington.",
    type: "Primary",
    mapQuery: "Shillington, PA",
  },
  {
    name: "Sinking Spring",
    description:
      "Residential and commercial landscaping services throughout Sinking Spring.",
    type: "Primary",
    mapQuery: "Sinking Spring, PA",
  },
  {
    name: "Mohnton",
    description:
      "Expert tree services and landscape design for Mohnton homes and businesses.",
    type: "Surrounding",
    mapQuery: "Mohnton, PA",
  },
  {
    name: "Leesport",
    description: "Reliable snow removal and spring cleanup services in Leesport.",
    type: "Surrounding",
    mapQuery: "Leesport, PA",
  },
  {
    name: "Temple",
    description: "Quality landscaping maintenance and hardscaping projects in Temple.",
    type: "Surrounding",
    mapQuery: "Temple, PA",
  },
  {
    name: "Laureldale",
    description:
      "Comprehensive property care including lawn care and tree removal in Laureldale.",
    type: "Surrounding",
    mapQuery: "Laureldale, PA",
  },
  {
    name: "Ontelaunee",
    description: "Professional landscape services for Ontelaunee residential properties.",
    type: "Surrounding",
    mapQuery: "Ontelaunee, PA",
  },
  {
    name: "Blandon",
    description: "Expert mulch installation and garden maintenance in Blandon.",
    type: "Surrounding",
    mapQuery: "Blandon, PA",
  },
  {
    name: "Reiffton",
    description: "Full-service landscaping and snow plowing for Reiffton families.",
    type: "Surrounding",
    mapQuery: "Reiffton, PA",
  },
  {
    name: "Mt. Penn",
    description: "Specialty landscaping services for Mt. Penn mountain properties.",
    type: "Surrounding",
    mapQuery: "Mount Penn, PA",
  },
  {
    name: "Morisville",
    description: "Hardscaping and outdoor living space design in Morisville.",
    type: "Surrounding",
    mapQuery: "Morrisville, PA",
  },
  {
    name: "Flying Hills",
    description: "Professional tree care and landscape maintenance in Flying Hills.",
    type: "Surrounding",
    mapQuery: "Flying Hills, PA",
  },
  {
    name: "Alleghenyville",
    description:
      "Complete property maintenance and seasonal services in Alleghenyville.",
    type: "Surrounding",
    mapQuery: "Alleghenyville, PA",
  },
  {
    name: "Pricetown",
    description: "Quality landscape design and installation in Pricetown.",
    type: "Surrounding",
    mapQuery: "Pricetown, PA",
  },
  {
    name: "Fleetwood",
    description: "Snow removal, lawn care, and hardscaping services in Fleetwood.",
    type: "Surrounding",
    mapQuery: "Fleetwood, PA",
  },
  {
    name: "Lorne",
    description: "Professional landscaping and property maintenance for Lorne.",
    type: "Surrounding",
    mapQuery: "Lorane, PA",
  },
  {
    name: "Birdsboro",
    description: "Comprehensive landscaping and tree service solutions in Birdsboro.",
    type: "Additional",
    mapQuery: "Birdsboro, PA",
  },
  {
    name: "Exeter",
    description: "Expert landscape contractors serving Exeter and surrounding areas.",
    type: "Additional",
    mapQuery: "Exeter Township, PA",
  },
  {
    name: "Cumru",
    description: "Full service landscaping, mulch, and sod installation in Cumru.",
    type: "Additional",
    mapQuery: "Cumru Township, PA",
  },
  {
    name: "Muhlenberg",
    description: "Professional hardscaping and outdoor design in Muhlenberg.",
    type: "Additional",
    mapQuery: "Muhlenberg Township, PA",
  },
  {
    name: "Amity",
    description: "Reliable lawn care and snow removal services for Amity residents.",
    type: "Additional",
    mapQuery: "Amity Township, PA",
  },
  {
    name: "Tulpehocken",
    description: "Custom landscaping and tree service for Tulpehocken properties.",
    type: "Additional",
    mapQuery: "Tulpehocken Township, PA",
  },
  {
    name: "Wernersville",
    description: "Professional landscaping maintenance and seasonal cleanups in Wernersville.",
    type: "Additional",
    mapQuery: "Wernersville, PA",
  },
];

export const getLocationBySlug = (slug: string): ServiceLocation | undefined =>
  locationsData.find((location) => toLocationSlug(location.name) === slug);
