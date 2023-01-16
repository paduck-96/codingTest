const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const fullTime = Number(input.shift());
let start = 0;
while (start < fullTime) {
  let checkStr = input[start];
  const checkArr = [];
  let wrong = false;
  while (checkStr.length !== 0) {
    const temp = checkStr.substring(0, 1);
    checkStr = checkStr.substring(1);
    if (temp === "(") {
      checkArr.push(temp);
    } else {
      if (checkArr.length === 0) {
        wrong = true;
        break;
      }
      checkArr.pop();
    }
  }
  if (checkArr.length !== 0) {
    console.log("NO");
  } else {
    if (wrong) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
  start++;
}
