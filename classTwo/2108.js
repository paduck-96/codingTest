const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cases = Number(input.shift());
const arr = input.map((n) => Number(n));
arr.sort((a,b)=>a-b);

const result = [];
// 산술평균 출력
let sum = 0;
arr.forEach((el) => {
  sum += Number(el);
});
const arrSum = (sum / arr.length).toFixed();
if (arrSum == -0) result.push(0);
else result.push(arrSum);

// 중앙값 구하기
let end = Math.floor(cases / 2);
result.push(arr[end]);

// 최빈값 구하기
let map = {};
let mapArr = [];
//함수의 각 요소를 확인해서 개수 더하기
for (let idx of arr) {
  if (map[idx]) map[idx] += 1;
  else map[idx] = 1;
}
let mapMax = Math.max(...Object.values(map));
//최대값이 여려개일 경우 상정
for (let key in map) {
  if (map[key] === mapMax) mapArr.push(key);
}
//최반값이 여러개라면
if (mapArr.length > 1) {
  mapArr.sort((a, b) => a - b);
  result.push(mapArr[1]);
} else result.push(mapArr[0]);

// 범위 구하기
let range = arr[arr.length-1]-arr[0];
result.push(range);

console.log(result.join("\n"));