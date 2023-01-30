const fs = require('fs');
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let answer = 0;
while(true){
  if(input%5===0){
    console.log(input/5 + answer);
    break;
  }
  if(0>input){
    console.log(-1);
    break;
  }
  answer++;
  input-=3;
}