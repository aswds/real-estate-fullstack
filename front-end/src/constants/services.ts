import { buildImage, expertise, lease, rent } from "@assets/services/index";

export const services = [
  {
    title: "Build",
    description: "Construct structures with precision and innovation.",
    img: buildImage,
  },
  {
    title: "Expertise",
    description:
      "Demonstrate proficiency in diverse fields of knowledge and skills.",
    img: expertise,
  },
  {
    title: "Rent",
    description: "Access temporary use of resources for your convenience.",
    img: rent,
  },
  {
    title: "Lease",
    description:
      "Secure long-term agreements for exclusive usage of valuable assets.",
    img: lease,
  },
];
