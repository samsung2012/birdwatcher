const birds = [
  {
    id: 1,
    type: "Blue Jay",
    slug: "blue-jay",
    locationId: 1,
    time: "11:00 AM",
  },
  {
    id: 2,
    type: "Mocking Bird",
    slug: "mocking-bird",
    locationId: 1,
    time: "10:00 AM",
  },
  {
    id: 3,
    type: "Starling",
    slug: "starling",
    locationId: 2,
    time: "1:00 PM",
  },
  {
    id: 4,
    type: "Sparrow",
    slug: "sparrow",
    locationId: 2,
    time: "11:00 AM",
  },
  {
    id: 5,
    type: "Eagle",
    slug: "eagle",
    locationId: 3,
    time: "9:00 AM",
  },
];

const locations = [
  { id: 1, name: "USA" },
  { id: 2, name: "Canada" },
  { id: 3, name: "Mexico" },
];

const newBird = {
  id: null,
  type: "",
  locationId: null,
  time: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newBird,
  birds,
  locations,
};
