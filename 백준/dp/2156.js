const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const CUP = Number(input.shift());

let wine = input.map(n=>Number(n));
let result = [0,wine[0], wine[0]+wine[1]];
for(let i=3; i<=CUP;i++){
    result[i] = Math.max(result[i-1], result[i-2]+wine[i-1], result[i-3]+wine[i-1]+wine[i-2]);
}

console.log(result[CUP])