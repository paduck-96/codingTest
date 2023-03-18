const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = '';
while(input.length >=3){
    answer = parseInt(input.slice(input.length-3),2).toString(8) + answer;
    input = input.slice(0, input.length-3);
}
console.log(input ? answer= parseInt(input,2).toString(8) + answer : answer);