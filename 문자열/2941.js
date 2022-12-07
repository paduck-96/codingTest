const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let inputArr = [...input];

const croatiaLetter = {
  "c=": "č",
  "c-": "ć	",
  "dz=": "dž",
  "d-": "đ",
  lj: "	lj",
  nj: "nj",
  "s=": "š",
  "z=": "ž",
};

let result = [];
while (inputArr.length > 0) {
  let checkLetterOne = inputArr[0] + inputArr[1];
  let checkLetterTwo = inputArr[0] + inputArr[1] + inputArr[2];
  const croatiaKeys = Object.keys(croatiaLetter);
  if (croatiaKeys.includes(checkLetterOne)) {
    inputArr.splice(0, 2);
    result.push(croatiaKeys[checkLetterOne]);
  } else if (croatiaKeys.includes(checkLetterTwo)) {
    inputArr.splice(0, 3);
    result.push(croatiaKeys[checkLetterTwo]);
  } else {
    let checkLetterThree = inputArr.splice(0, 1);
    result.push(checkLetterThree);
  }
}
console.log(result.length);
