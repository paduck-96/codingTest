const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let startNum = 1;
let result = [];
while (startNum <= input) {
  result.push(startNum);
  startNum++;
}
console.log(result.join("\n"));
