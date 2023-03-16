const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [PPL, TARGET] = input.map(n=>Number(n));

let nums = [];
for(let i =1; i<=PPL;i++){
    nums.push(i);
}

let answer = [];
let idx = 1;
while(nums.length){
    let person = nums.shift();
    if(idx%TARGET===0){
        answer.push(person)
    }else{
        nums.push(person);
    }
    idx++;
}

console.log(`<${answer.join(", ")}>`)