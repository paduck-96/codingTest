const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

// 홀수 무조건 0
let result = [0,0,3,0]
for(let i =4;i<=input;i+=2){
    result[i] = result[i-2]*result[2]+2;
    for(let j =4; j<=i;j+=2){
        result[i] +=  result[i-j]*2
    }
}

console.log(input%2===1?0:result[input])