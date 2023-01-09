const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const fullRange = input.shift();
console.log(input.sort((a,b)=>a-b).join("\n"));