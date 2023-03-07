/**
 * 1-2 백준 주몽
 * 조합을 구해서 문제에서 주어진 값이 나올 때까지 전체 반복
 */
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const MATERIAL = Number(input.shift());
const TARGET = Number(input.shift());
const ARMOR = input[0].split(" ").map(n=>Number(n)).sort((a,b)=>a-b);

let answer = 0;
let first = 0;
let second = ARMOR.length-1
while(first<second){
  let armor = ARMOR[first]+ARMOR[second]
  if(armor===TARGET){
    answer++;
    first++;
    second--;
  }else{
    if(armor<TARGET){
      first++;
    }else{
      second--;
    }
  }
}

console.log(answer);