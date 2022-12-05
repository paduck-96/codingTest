const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();
let letters = {};
let count = 0;
while (count < input.length) {
  if (letters[input[count]] == undefined) {
    letters[input[count]] = 1;
  } else {
    letters[input[count]] += 1;
  }
  count++;
}

let result = [];
result = Object.values(letters).sort((a, b) => b - a);
if (result.length == 1) {
  console.log(Object.keys(letters)[0]);
} else {
  if (result[0] == result[1]) {
    console.log("?");
  } else {
    let i = 0;
    while (i < input.length) {
      if (letters[input[i]] == result[0]) {
        console.log(input[i]);
        break;
      }
      i++;
    }
  }
}
