const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const requestTime = Number(input.shift());
let start = 0;
let result = [];
let answer = [];
while (start < requestTime) {
  const arr = input[start].trim().split(" ");
  let work, time;
  if (arr.length == 2) {
    work = arr[0];
    time = arr[1];
  } else {
    work = arr[0];
  }
  switch (work) {
    case "push":
      result.push(time);
      break;
    case "pop":
      let popNum = result.pop();
      if (popNum == undefined) {
        answer.push(-1);
      } else answer.push(popNum)
      break;
    case "size":
      answer.push(result.length);
      break;
    case "empty":
      if (result.length == 0) {
        answer.push(1);
      } else {
        answer.push(0)
      }
      break;
    case "top":
      let topNum = result[result.length - 1];
      if (topNum == undefined) {
        answer.push(-1);
      } else answer.push(topNum)
      break;
    default:
      return;
  }
  start++;
}
console.log(answer.join("\n"));