const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputLen = input.length;
let start = 0;
const answer = [];
while(start<inputLen-1){
  let result = [];
  let flag = false;
  [...input[start]].forEach(ch => {
    if(ch == "(" || ch == "["){
      result.push(ch);
    }
    else{
      if(ch==")"){
        if(result[result.length-1] === "(")result.pop();
        else {
          flag = true;
          return;
        }
      }
      if(ch=="]"){
        if(result[result.length-1] === "[")result.pop()
        else {
          flag = true;
          return;
        }
      }
    }
  })
  if(result.length !== 0 || flag){
    answer.push("no")
  }else{
    answer.push("yes")
  }
  start++;
}
console.log(answer.join("\n"));