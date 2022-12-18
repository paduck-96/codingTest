// 입력 받아오기
const fs = require('fs');
// 단어만 가져오기
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

input.sort((a,b)=>{
    return a.length-b.length || a.localeCompare(b);
})

const answer = new Set(input);
console.log(Array.from(answer).join("\n"));