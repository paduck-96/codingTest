const fs = require('fs');
const [totalCard, totalCardList, sgCard, sgCardList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalArr = totalCardList.split(" ");
const sgArr = sgCardList.split(" ");
const result = [];
// 중복을 제거한 값의 목록을 만들기 위한 과정
//map은 키 와 value 로 저장해 편리
const totalMap = new Map();
totalArr.forEach(el=>{
  if(totalMap.has(el))totalMap.set(el, totalMap.get(el)+1);
  else totalMap.set(el, 1);
})
// 중복 제거된 map 과 비교해 결과 확인
sgArr.forEach(el => {
  if(totalMap.has(el)) result.push(totalMap.get(el));
  else result.push(0);
})

console.log(result.join(" "));