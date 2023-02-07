const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testCases = Number(input.shift());

/**
 * @version1
 * 문제에서 주어진 피보나치 수열을 js 코드로 옮겨서
 * 각 피보나치 재귀에서 0과 1이 나타날 때 카운트 증가
 * 0 과 1의 개수는 객체로 생성
 * @version2
 * 재귀함수 사용시 시간초과 문제 발생
 * 배열에 피보나치 수열을 저장하는 형태로 시간 감축
 * 0과 1에 대한 개수를 추출해야하기 때문에 2차원 배열 사용
 */
let start = 0;
while(start<testCases){
  const fiboArr = [[1,0],[0,1]]
  const num = input[start];
  let idx = 2;
  while(idx<=num){
    fiboArr[idx] = [ fiboArr[idx-1][0]+fiboArr[idx-2][0], fiboArr[idx-1][1]+fiboArr[idx-2][1]]
    idx++;
  }
  console.log(fiboArr[num].join(" "));
  start++;
}