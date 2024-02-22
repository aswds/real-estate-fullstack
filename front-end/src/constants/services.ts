import { buildImage, expertise, lease, rent } from "@assets/services/index";

export const services = [
  {
    title: "Build",
    description:
      "Setting the standard for master planning work for real estate development and redevelopment projects around the world.",
    img: buildImage,
  },
  {
    title: "Expertise",
    description:
      "Our seasoned team excels in market analysis, precise property valuation, and effective negotiation.",
    img: expertise,
  },
  {
    title: "Rent",
    description:
      "Discover a range of carefully curated rental properties tailored to your needs.",
    img: rent,
  },
  {
    title: "Lease",
    description:
      "Explore our curated selection of available properties for lease, including residential homes and commercial spaces.",
    img: lease,
  },
];
