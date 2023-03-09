const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const num = Array.from({length:input+1}).fill(0);
for(let i=2;i<=input;i++){
    num[i]=num[i-1]+1;
    if (i % 2 === 0) {
        num[i] = Math.min(num[i], num[i / 2] + 1);
      }
  
      if (i % 3 === 0) {
        num[i] = Math.min(num[i], num[i / 3] + 1);	
      }
}

console.log(num[input])