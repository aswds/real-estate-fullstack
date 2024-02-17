import { ProjectHouse0, ProjectHouse1, ProjectHouse2 } from "@assets/houses";

export type ProjectHouseType = {
  city: string;
  state: string;
  img: string;
};

export const projectHouses: ProjectHouseType[] = [
  {
    city: "Madison Lake",
    state: "Minnesota",
    img: ProjectHouse0,
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    img: ProjectHouse1,
  },
  {
    city: "Bismarck",
    state: "North Dakota",
    img: ProjectHouse2,
  },
];
