import { distinct } from "@std/collections";
const isDescending = (a) => a === a.split("").sort().join("");
const result = [];
const regex = /(\d)\1/;

const occurence = (c, s) => {
  return s.split("").filter((x) => x === c).length;
};

const containsDoubles = (a) => {
  const unique = distinct(a);
  return unique.some((x) => occurence(x, a) === 2);
};

for (let i = 353096; i <= 843212; i++) {
  if (isDescending(i.toString()) && regex.test(i)&&containsDoubles(i+'')) {
    result.push(i);
  }
}

console.log(result.length);
