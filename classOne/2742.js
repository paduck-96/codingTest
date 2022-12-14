const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let result = [];
let index = Number(input);
while (index > 0) {
  result.push(index);
  index--;
}

console.log(result.join("\n"));
