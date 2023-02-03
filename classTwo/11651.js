const fs = require("fs");
const input = fs.readFileSync("samples.txt").toString().trim().split("\n");
const total = Number(input.shift());
const arr = input.map((n) => n.split(" ").map((n) => Number(n)));
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
console.log(arr.join("\n").replaceAll(",", " "));
