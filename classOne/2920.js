const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));
const checkingArr = input.concat();

if (
  JSON.stringify(checkingArr.sort((a, b) => a - b)) === JSON.stringify(input)
) {
  console.log("ascending");
} else if (
  JSON.stringify(checkingArr.sort((a, b) => b - a)) === JSON.stringify(input)
) {
  console.log("descending");
} else {
  console.log("mixed");
}
