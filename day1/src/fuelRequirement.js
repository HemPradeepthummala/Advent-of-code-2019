import { masses } from "./parseToArray.js";

const sub = (x, y = 2) => x - y;
const div = (x, y = 3) => Math.floor(x / y);
const fuelRequired = (x) => sub(div(x));
const sum = (x, y) => x + y;

const sumOfFuelRequired = (masses) => {
  const fuels = masses.map(fuelRequired);
  return fuels.reduce(sum, 0);
};

console.log(sumOfFuelRequired(masses));