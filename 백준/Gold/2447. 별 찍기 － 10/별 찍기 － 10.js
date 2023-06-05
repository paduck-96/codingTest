const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let result = "";

const DRAW = (i, j) => {
  while (i != 0) {
    if (i % 3 == 1 && j % 3 == 1) {
      result += " ";
      return;
    }
    i = Math.floor(i / 3);
    j = Math.floor(j / 3);
  }
  result += "*";
};

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    DRAW(i, j);
  }
  result += "\n";
}

console.log(result);