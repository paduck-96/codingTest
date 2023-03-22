const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const combi = [input[0], input[1], input[0]-input[1]];

let answer2 = [];
let answer5 = [];
for(let i =0; i<combi.length;i++){
  let number2 = combi[i];
  let number5 = combi[i];
  let temp2 = 0;
  let temp5 = 0;
  while(number2>=2){
    temp2 += parseInt(number2/2);
    number2 /= 2;
  }
  answer2.push(temp2);

  while(number5>=5){
    temp5 += parseInt(number5/5);
    number5/=5;
  }
  answer5.push(temp5)
}

console.log(Math.min((answer2[0]-answer2[1]-answer2[2]),(answer5[0]-answer5[1]-answer5[2])))