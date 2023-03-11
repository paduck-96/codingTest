const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const LENGTH = Number(input.shift());
const NUMARR = input[0].split(" ").map(n=>Number(n));

let sumResult = [NUMARR[0]];
for(let i =1; i<LENGTH;i++){
    sumResult[i] = NUMARR[i];
    if(NUMARR[i]>sumResult[i-1]+NUMARR[i]){
        sumResult[i] = NUMARR[i];
    }
    else sumResult[i] = NUMARR[i]+sumResult[i-1];
}

console.log(Math.max(...sumResult))