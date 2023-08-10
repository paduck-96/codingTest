const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const findLottoCombinations = (numbers) => {
  const result = [];
  const path = [];

  const dfs = (start) => {
    if (path.length === 6) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      path.push(numbers[i]);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  for (const combination of result) {
    console.log(combination.join(" "));
  }
};

for (let i = 0; i < input.length - 1; i++) {
  if (input[i].split(" ")[0] === 0) break;
  const numbers = input[i].split(" ").slice(1).map(Number);
  findLottoCombinations(numbers);
  if (i < input.length - 2) {
    console.log("");
  }
}