const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const LENGTH = Number(input.shift());
const NUMARR = input[0].split(" ").map(n=>Number(n));

let result = [];
for(let i =0; i<LENGTH;i++){
    result[i]=NUMARR[i];
    for(let j=0; j<i;j++){
        if(NUMARR[j]<NUMARR[i] && result[i] < result[j]+NUMARR[i]){
            result[i] = result[j]+NUMARR[i];
        }
    }
}

console.log(Math.max(...result))