const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [first, second] = input;

first = [...first].reverse().join("");
second = [...second].reverse().join("");

if (Number(first) > Number(second)) {
  console.log(first);
} else {
  console.log(second);
}
