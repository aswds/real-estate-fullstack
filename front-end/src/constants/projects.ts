export interface IProject {
  name: string;
  location: {
    state: string;
    country: string;
  };
  // Placeholder for image URL (replace with actual image paths)
  image: string;
  resolution: "tall" | "small" | "wide-tall" | "wide";
}

export const projects: IProject[] = [
  {
    name: "The Cove at Sunset Bay",
    location: {
      state: "California",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "tall",
  },
  {
    name: "Whispering Pines",
    location: {
      state: "Colorado",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image path
    resolution: "small",
  },
  {
    name: "Azure Residences",
    location: {
      state: "Florida",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "small",
  },
  {
    name: "Hilltop Manor",
    location: {
      state: "Texas",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "small",
  },
  {
    name: "Venetian Harbor",
    location: {
      state: "Italy",
      country: "Italy",
    },
    image:
      "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "tall",
  },
  {
    name: "The Royal Palms",
    location: {
      state: "Hawaii",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/940308/pexels-photo-940308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "tall",
  },
  {
    name: "Cherry Blossom Lane",
    location: {
      state: "Japan",
      country: "Japan",
    },
    image:
      "https://images.pexels.com/photos/409842/pexels-photo-409842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "wide-tall",
  },
  {
    name: "Castle View",
    location: {
      state: "Scotland",
      country: "United Kingdom",
    },
    image:
      "https://images.pexels.com/photos/388419/pexels-photo-388419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "small",
  },
  {
    name: "Harborside Landing",
    location: {
      state: "Maine",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "small",
  },
  {
    name: "The Oasis",
    location: {
      state: "Dubai",
      country: "United Arab Emirates",
    },
    image:
      "https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    resolution: "small",
  },
  {
    name: "Alpine Meadows",
    location: {
      state: "Switzerland",
      country: "Switzerland",
    },
    image:
      "https://images.pexels.com/photos/1719477/pexels-photo-1719477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    resolution: "wide", // Assuming Alpine Meadows are tall residences
  },
  {
    name: "Sunset Cliffs",
    location: {
      state: "California",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/68437/pexels-photo-68437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    resolution: "tall", // Assuming Sunset Cliffs are spread out horizontally and vertically
  },
  {
    name: "The Vineyard Estate",
    location: {
      state: "California",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/1624990/pexels-photo-1624990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    resolution: "wide-tall", // Assuming The Vineyard Estate covers a large horizontal and vertical area
  },
  {
    name: "Cityscape Towers",
    location: {
      state: "New York",
      country: "USA",
    },
    image:
      "https://images.pexels.com/photos/418282/pexels-photo-418282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    resolution: "wide", // Assuming Cityscape Towers are tall buildings
  },
  {
    name: "The Parkside Villas",
    location: {
      state: "London",
      country: "United Kingdom",
    },
    image:
      "https://images.pexels.com/photos/9301027/pexels-photo-9301027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    resolution: "small", // Assuming The Parkside Villas occupy a large area
  },
];
