let result = 0;
const operations = {
  1: (x, y, index, arr) => arr[index] = x + y,
  2: (x, y, index, arr) => arr[index] = x * y,
  3: (arr, index, val = 5) => arr[index] = prompts.pop(),
  4: (arr, index) => {
    prompts.push(arr[index]);
  },
  5: (x) => x !== 0,
  6: (x) => x === 0,
  7: (x, y) => x < y,
  8: (x, y) => x === y,
};

let prompts = [];

const position = (m, i, arr, step) => {
  return m === 1 ? i + step : arr[i + step];
};

const performArithmetic = ([A, B, C], arr, i, opc) => {
  const storeAt = position(A, i, arr, 3);
  const op2 = arr[position(B, i, arr, 2)];
  const op1 = arr[position(C, i, arr, 1)];
  operations[opc](op1, op2, storeAt, arr);
  return i + 4;
};

const performIO = (M, arr, i, opc) => {
  const index = position(M[2], i, arr, 1);
  operations[opc](arr, index);
  return i + 2;
};

const handleJump = (M, arr, i, opc) => {
  const op1 = arr[position(M[2], i, arr, 1)];
  const op2 = arr[position(M[1], i, arr, 2)];
  if (operations[opc](op1)) {
    return op2;
  }
  return i + 3;
};

const handleCompare = ([A, B, C], arr, i, opc) => {
  const storeAt = position(A, i, arr, 3);
  const op2 = arr[position(B, i, arr, 2)];
  const op1 = arr[position(C, i, arr, 1)];
  arr[storeAt] = +operations[opc](op1, op2);
  return i + 4;
};

const operationType = {
  1: performArithmetic,
  2: performArithmetic,
  3: performIO,
  4: performIO,
  5: handleJump,
  6: handleJump,
  7: handleCompare,
  8: handleCompare,
};

const parseInstruction = (instruction) => {
  const ins = (instruction.toString()).padStart(5, "0");
  const opCode = +ins.slice(ins.length - 2);
  const modes = ins.slice(0, 3).split("").map((x) => +x);
  return [opCode, modes];
};

export const intCode = (instructions, phases) => {
  prompts = phases;
  instructions = instructions.split(",").map((x) => +x);
  let index = 0;
  while (instructions[index] != 99) {
    const [opCode, modes] = parseInstruction(instructions[index]);
    index = operationType[opCode](modes, instructions, index, opCode);
  }
};
