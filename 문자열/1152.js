const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const answer = input.split(" ");
console.log(answer[0] === "" ? 0 : answer.length);
