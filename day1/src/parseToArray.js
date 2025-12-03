const inputs = Deno.readTextFileSync("day1/data/input.txt");
const parse = (x) => +x;
const split = (str, d = "\n") => str.split(d);
export const masses = split(inputs).map(parse);
