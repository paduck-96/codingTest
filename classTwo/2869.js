const fs = require("fs");
const [DAY, NIGHT, HEIGHT] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));
console.log(Math.ceil((HEIGHT - NIGHT) / (DAY - NIGHT)));
