const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

let merged = arrA.concat(arrB).sort((a, b) => a - b);

console.log(merged.join(" "));