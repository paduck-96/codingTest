const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const TIME = Number(input.shift());

let result = [0,1,2,4];
for(let i =4; i<11;i++){
    if(result[i]!==undefined)return result[i]
    result[i] = result[i-3]+result[i-2]+result[i-1]
}

for(let i =0; i<TIME;i++){
    console.log(result[input[i]])
}