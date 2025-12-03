import { masses } from "./parseToArray.js";

const sub = (x, y = 2) => x - y;
const div = (x, y = 3) => Math.floor(x / y);
const sum = (x, y) => x + y;
const fuelRequired = (x) => sub(div(x));

const fuelForMass = (x) => {
  let fuel = fuelRequired(x);
  const fuels = [];
  while (fuel > 0) {
    if (fuel > 0) {
      fuels.push(fuel);
    }
    fuel = fuelRequired(fuel);
  }
  return fuels;
};

const sumOfFuelRequired = (masses) => {
  const fuels = masses.flatMap(fuelForMass);
  return fuels.reduce(sum, 0);
};

console.log(sumOfFuelRequired(masses));
