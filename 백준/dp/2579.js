const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const STAIRS = Number(input.shift());

let stairsSum=[0, Number(input[0])];
stairsSum[2] = Math.max(Number(input[0])+Number(input[1]), Number(input[1]))
stairsSum[3] = Math.max(Number(input[0])+Number(input[2]), Number(input[1])+Number(input[2]))
for(let i =4; i<=STAIRS;i++){
    stairsSum[i] = Math.max(Number(input[i-1]) + Number(input[i-2])+stairsSum[i-3] ,Number(input[i-1])+stairsSum[i-2])
}

console.log(stairsSum[STAIRS])