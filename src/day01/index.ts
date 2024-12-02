import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;
const parseLists = (input: string) => {
  const lines = input.split("\n");
  const listA = [];
  const listB = [];
  for (const line of lines) {
    const numbers = line.split(/\s+/);
    listA.push(Number(numbers[0]));
    listB.push(Number(numbers[1]));
  }
  return [listA, listB];
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const [listA, listB] = parseLists(input);
  listA.sort((a, b) => b - a);
  listB.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < listA.length; i++) {
    sum += Math.abs(listA[i] - listB[i]);
  }

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const [listA, listB] = parseLists(input);

  let score = 0;
  const ocurrences: Record<string, number> = {};
  for (let num of listA) {
    ocurrences[num] ??= listB.filter(n => n === num).length;
    score += num * ocurrences[num];
  }
  return score;
};

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

run({
  part1: {
    tests: [
      {
        input,
        expected: 0,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: 0,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
