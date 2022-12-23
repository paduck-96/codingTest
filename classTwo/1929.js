const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [startNum, endNum] = input.map(n=>Number(n));

const primaryNum = (n1,n2)=>{

  let result = 0;

  if(n2<=0) return 0;
  if(n1%n2==0)result=1;
  else result=0;
  result+=primaryNum(n1,n2-1);

  return result;
}

let start = startNum;
let cnt = 0;
let result= [];
while(start<=endNum){
  cnt = primaryNum(start, start);
  if(cnt==2) result.push(start);
  start++;
}

console.log(result.join("\n") )