const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let check = 1;
let arr = [];
while (check <= input) {
  arr.push(check);
  check++;
}
console.log(arr);

let result = "";
while (arr.length > 1) {
  if (arr.length == 2) {
    arr.shift();
    result += arr;
  }
  arr.shift();
  let btm = arr.shift();
  arr.push(btm);
}

console.log(result);
