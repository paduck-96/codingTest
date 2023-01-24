const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const fullTimes = Number(input.shift());
let result = "";
const newInput = input.map(el => el.split(" ").map(el2=>Number(el2)));
newInput.sort((a,b) => {
  if(a[0]==b[0]){
    return a[1]-b[1]
  }
  return a[0]-b[0]
})
.forEach(el => {
  result += `${el[0]} ${el[1]}\n`
})
console.log(result)