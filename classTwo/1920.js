const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const checkArr = input[1].split(" ").map(n=>Number(n)).sort((a,b)=>a-b)
const includeArr = input[3].split(" ").map(n=>Number(n));

let result = [];
includeArr.forEach(el => {
  let start = 0;
  let end =checkArr.length-1;
  let exist = false;
  while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(el<checkArr[mid]){
      end=mid-1;
    }
    else if(el>checkArr[mid]){
      start=mid+1;
    }
    else{
      exist = true;
      break;
    }
  }
  if(exist === true){
    result.push(1);
  }
  else {
    result.push(0); 
  } 
});

console.log(result.join("\n"));