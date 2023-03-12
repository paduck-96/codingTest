const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const TOTAL = Number(input.shift());
let cards = input[0].split(" ").map(n=>Number(n));

let result = [0];
for(let i =1; i<=TOTAL; i++){
    result[i] = cards[i-1]
    for(let j =1; j<=i; j++){
        result[i] = Math.max(result[i], result[i-j]+cards[j-1])
    }
}

console.log(result[TOTAL])