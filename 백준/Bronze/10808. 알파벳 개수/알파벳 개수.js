const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphaArr = Array.from({length:alphabet.length}).fill(0);

input.forEach(el=>{
    alphaArr[alphabet.indexOf(el)]++;
})

console.log(alphaArr.join(" "));