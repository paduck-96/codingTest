const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
const map = Array.from(Array(input), () => Array(2 * input - 1).fill(" "));

let result = "";

const DRAW = (x, y, N) => {
  if (N === 3) {
    map[x][y] = "*";
    map[x + 1][y - 1] = "*";
    map[x + 1][y + 1] = "*";
    map[x + 2][y - 2] = "*";
    map[x + 2][y - 1] = "*";
    map[x + 2][y] = "*";
    map[x + 2][y + 1] = "*";
    map[x + 2][y + 2] = "*";
    return;
  }

  DRAW(x, y, N / 2);
  DRAW(x + N / 2, y - N / 2, N / 2);
  DRAW(x + N / 2, y + N / 2, N / 2);
};

DRAW(0, input - 1, input);

map.forEach((el) => console.log(el.join("")));