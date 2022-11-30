const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = 0;

const checkDigit = (number, length) => {
  let digit = [];
  for (let i = 0; i < length; i++) {
    digit.push(number % 10);
    number = Math.floor(number / 10);
  }
  digit.reverse();
  if (length == 1) {
    return true;
  } else if (length == 2) {
    return true;
  } else if (length == 3) {
    let i = 0;
    if (digit[i] - digit[i + 1] == digit[i + 1] - digit[i + 2]) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

let num = 1;
while (num <= input) {
  if (checkDigit(num, String(num).length)) result += 1;
  num++;
}

console.log(result);
