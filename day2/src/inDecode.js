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

const code = Deno.readTextFileSync('./data/input.txt').split(',');
console.log(intDecode(code));