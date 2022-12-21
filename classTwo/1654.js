const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 현재 랜선의 개수는 구할 수 있음
//필요한 랜선의 개수를 받아와 이진반복을 진행하는지 여부 구하기
const reachLan = input
  .shift()
  .split(" ")
  .map((n) => Number(n))[1]
input.sort();

let max = Math.max(...input);
let min = 0;

let result=0;
while(min<=max){
  let mid = parseInt((max+min)/2);
  let lanCount = input.reduce((acc,cur)=>acc+Math.floor(cur/mid),0)
  if(lanCount>=reachLan){
    if(mid>result)result = mid;
    min = mid + 1;
  }else{
    max=mid-1;
  }
}
console.log(result);