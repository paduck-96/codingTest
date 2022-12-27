const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(n=>Number(n));
const totalLine = input.shift();

let start = 1;
let stack = [];
let answer = [];
for(let i =0; i<totalLine;i++){
let checkLine = input[i];
while(start<=checkLine){
  stack.push(start);
  answer.push("+");
  start++;
}
let popStack = stack.pop();
answer.push("-");
if(popStack !== checkLine){
  answer = ["NO"];
  break;
}}

console.log(answer.join("\n"));