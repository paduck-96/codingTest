const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim();

let endArr = [];
for(let i = 0; i<input.length;i++){
    endArr.push(input.slice(i))
}

console.log(endArr.sort().join("\n"));