const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cases = Number(input[0]);

let cnt = 1;
let sum = "";
const result = [];

while (cnt <= cases) {
  const [multi, text] = input[cnt].split(" ");
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < multi; j++) {
      if (text[i] == "\r") break;
      sum += text[i];
    }
  }
  result.push(sum);
  cnt++;
  sum = "";
}

console.log(result.join("\n"));
