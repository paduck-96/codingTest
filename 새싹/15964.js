const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [left, right] = input.map((n) => Number(n));

const result = (left + right) * (left - right);

console.log(result);
