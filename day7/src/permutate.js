const array = [0, 1, 2, 3, 4];
const swap = (array, i, j = 2) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const permutate = (array) => {
  for (let i = 0; i < 5; i++) {
    swap(array, 0, array.length - 1);
    for (let j = 1; j < 5; j++) {
      swap(array, 1, array.length - 1);
      for (let k = 2; k < 5; k++) {
        swap(array, 2, array.length - 1);
        for (let l = 3; l < 5; l++) {
          swap(array, 3, array.length - 1);
          combinations.push([...array]);
        }
      }
    }
  }
};
export const combinations = [];
permutate(array);
