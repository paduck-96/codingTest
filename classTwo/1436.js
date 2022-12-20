const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

//계속 증가시키면서 비교할 변수
//조건을 충족하는 변수
let checkNum = 1;
let shomCnt = 0;
//반복문은 조건을 충족하는 변수가 input과 동일할 때 종료
while (shomCnt !== input) {
  //증가시키면서 비교하는 변수가 666을 포함할 경우 조건 충족
  if (String(checkNum).includes("666")) {
    shomCnt++;
  }
  checkNum++;
}

console.log(checkNum - 1);
