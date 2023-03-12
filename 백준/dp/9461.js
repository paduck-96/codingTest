const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const TESTS = Number(input.shift());

let answer = [];
for(let i = 0; i<TESTS;i++){
    let result = [0,1,1,1]
    for(let j =4; j<=input[i];j++){
        result[j] = result[j-2]+result[j-3]
    }
    answer.push(result[input[i]])
}

console.log(answer.join("\n"))