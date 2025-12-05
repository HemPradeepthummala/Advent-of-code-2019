const createLayers = (pixels, width, tall) => {
  const layers = [];
  let index = 0;
  while (index < pixels.length) {
    layers.push(pixels.slice(index, index += width * tall));
  }
  return layers;
};
const input = Deno.readTextFileSync("./day8/data/input.txt");
const layers = createLayers(input, 25, 6);
const zeros = layers.map((x) =>
  x.split("").reduce((i, y) => y === "0" ? ++i : i, 0)
);
const index = zeros.findIndex((x) => x === Math.min(...zeros));
const count = (arr, item) => arr.reduce((i, x) => x === item ? ++i : i, 0);

const twos = count(layers[index].split(""), "2");
const ones = count(layers[index].split(""), "1");

console.log(twos, ones, twos * ones);
