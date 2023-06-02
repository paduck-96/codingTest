const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const SIZE = Number(input[0]);
const VIDEO = input.slice(1).map((row) => row.split(""));

//쿼드트리
const quadTree = (x, y, n) => {
  if (n === 1) return VIDEO[x][y];

  let result = "";
  let currentColor = VIDEO[x][y];
  let isAllSameColor = true;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (currentColor !== VIDEO[i][j]) {
        isAllSameColor = false;
        break;
      }
    }
    if (!isAllSameColor) break;
  }

  if (isAllSameColor) {
    return currentColor;
  } else {
    let newSize = n / 2;
    result += "(";
    result += quadTree(x, y, newSize);
    result += quadTree(x, y + newSize, newSize);
    result += quadTree(x + newSize, y, newSize);
    result += quadTree(x + newSize, y + newSize, newSize);
    result += ")";

    return result;
  }
};

console.log(quadTree(0, 0, SIZE));