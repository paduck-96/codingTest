const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let result = [0];
for(let i =1; i<=input; i++){
    result[i] = i;
    for(let j =1; j**2<=i; j++){
        result[i] = Math.min(result[i], result[i-j**2]+1)
    }
}
console.log(result.pop());