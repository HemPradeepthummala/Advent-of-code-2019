const operations = {
  1: (x, y) => x + y,
  2: (x, y) => x * y,
};

const intDecode = (arr) => {
  let index = 0;
  while (+arr[index] != 99) {
    const opCode = arr[index++];
    const op1 = +arr[arr[index++]];
    const op2 = +arr[arr[index++]];
    const storeAt = +arr[index++];
    arr[storeAt] = operations[opCode](op1, op2);
  }
  return arr[0];
};

const run = (noun, verb, code) => {
  code[1] = noun;
  code[2] = verb;
  return intDecode(code);
};

const inputs = Deno.readTextFileSync("./data/input.txt").split(",");

for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j++) {
    const code = [...inputs];
    if (run(i, j, code) === 19690720) {
      console.log(i, j);
      break;
    }
  }
}
