const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let tmp = num;
let remainder;
let answer = [];
while(tmp/-2 !== 0){
    remainder = tmp%-2;
    if(remainder == -1 || remainder == 1){
        tmp = Math.floor(tmp/-2)+1;
        answer.push(1);
    }else if(remainder === 0){
        tmp = Math.floor(tmp/-2);
        answer.push(0);
    }
}
console.log(answer.length === 0 ? 0 : answer.reverse().join(''));