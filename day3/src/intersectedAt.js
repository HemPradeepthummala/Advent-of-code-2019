const wire1 = {
  x: 0,
  y: 0,
  sum: ({ x, y }) => x + y,
};

const wire2 = {
  x: 0,
  y: 0,
  sum: ({ x, y }) => x + y,
};

const motion = {
  U: (ob) => {
    ++ob.y;
  },
  R: (ob) => {
    ++ob.x;
  },
  D: (ob) => {
    --ob.y;
  },
  L: (ob) => {
    --ob.x;
  },
};

const intersections = [];

const move = ([w1, w2]) => {
  let small = w1.moves;
  let big = w2.moves;
  if (big < small) {
    big = w1.moves;
    small = w2.moves;
  }
  const moveW1 = motion[w1.ins];
  const moveW2 = motion[w2.ins];

  for (let counter = 0; counter < big; counter++) {
    if (counter < w1.moves) moveW1(wire1);
    if (counter < w2.moves) moveW2(wire2);
    console.log(wire1, wire2);
    if (wire1.x === wire2.x && wire1.y === wire2.y) {
      intersections.push(wire1.sum(wire1));
      console.log('called');
    }
  }
  console.log('\n');
};

const w1 = {
  moves: 8,
  ins: "R",
};

const w2 = {
  moves: 7,
  ins: "U",
};

const parse = (string1, string2) => {
  const ins1 = string1.slice(0, 1) || "L";
  const ins2 = string2.slice(0, 1) || "L";
  const m1 = string1.slice(1) || 0;
  const m2 = string2.slice(1) || 0;
  return [{ moves: +m1, ins: ins1 }, { moves: +m2, ins: ins2 }];
};

const str1 = "R8,U5,L5,D3".split(",");
const str2 = "U7,R6,D4,L4,U1".split(",");

let big = str1.length;
if (str2.length > big) {
  big = str2.length;
}

const instructions = [];

for (let i = 0; i < big; i++) {
  instructions.push(parse(str1[i] || "", str2[i] || ""));
}

instructions.forEach(move);
