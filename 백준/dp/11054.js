const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const LENGTH = Number(input.shift());
const NUMARR = input[0].split(" ").map(n=>Number(n));

let increaseResult = [];
for(let i =0; i<LENGTH;i++){
    increaseResult[i]=1;
    for(let j=0; j<i;j++){
        if(NUMARR[j]<NUMARR[i]){
            if(increaseResult[i]<increaseResult[j]+1) increaseResult[i] = increaseResult[j]+1;
        }
    }
}

let decreaseResult = [];
for(let i=LENGTH-1; i>=0;i--){
    decreaseResult[i]=1;
    for(let j=LENGTH-1;j>i;j--){
        if(NUMARR[i]>NUMARR[j]){
            if(decreaseResult[i]<decreaseResult[j]+1) decreaseResult[i] = decreaseResult[j]+1;
        }
    }
}

const answer = increaseResult.map((el, idx)=>el+decreaseResult[idx]);
console.log(Math.max(...answer)-1)