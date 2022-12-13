const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number(input[0]);

let time = 1;
while (time <= count) {
  let inputLength = input[time].length;
  if (inputLength == 1) {
    console.log(input[time][0] + input[time][0]);
  } else {
    console.log(input[time][0] + input[time][inputLength - 1]);
  }

  time++;
}
