import { ProjectHouse0, ProjectHouse1, ProjectHouse2 } from "@assets/houses";

export type ProjectHouseType = {
  title: string;
  city: string;
  state: string;
  img: string;
  description: string;
};

export const projectHouses: ProjectHouseType[] = [
  {
    title: "Skyline Soaring - Modern Luxury in the Heart of the City",
    city: "Bismarck",
    state: "North Dakota",
    description:
      "Rise above the ordinary in this brand new 10+ story development, offering sleek condos and breathtaking city views.",
    img: ProjectHouse2,
  },
  {
    city: "Madison Lake",
    state: "Minnesota",
    description:
      "Nestled on the shores of picturesque Madison Lake, this charming single-family home offers the perfect blend of relaxation and recreation",
    title: "Lakefront Escape - Tranquility Meets Adventure",
    img: ProjectHouse0,
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    description:
      "Experience the epitome of Southern hospitality in this beautifully appointed house, centrally located in Charlotte. ",
    title: "Southern Charm Redefined - Elegance in a Bustling City",
    img: ProjectHouse1,
  },
];
