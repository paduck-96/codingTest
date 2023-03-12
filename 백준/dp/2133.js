const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

// 홀수 무조건 0
let result = [0,1,1,1]
for(let i =4; i<=input;i++){
    result[i] = result[i-2]+result[i-3]
}

console.log(result[input])
console.log(input%2===1?0:result[input])