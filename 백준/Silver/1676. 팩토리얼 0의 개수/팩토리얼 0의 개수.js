const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input2 = Number(fs.readFileSync(filePath).toString().trim());
let input5 = Number(fs.readFileSync(filePath).toString().trim());

let answer2 = 0;
let answer5 = 0;
while(input5>=5){
  answer5 += parseInt(input5/5);
  input5 /=5;
}
while(input2>=2){
  answer2 += parseInt(input2/2);
  input2 /= 2;
}

console.log(Math.min(answer2, answer5));