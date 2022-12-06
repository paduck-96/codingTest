const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const callingTime = {
  3: ["A", "B", "C"],
  4: ["D", "E", "F"],
  5: ["G", "H", "I"],
  6: ["J", "K", "L"],
  7: ["M", "N", "O"],
  8: ["P", "Q", "R", "S"],
  9: ["T", "U", "V"],
  10: ["W", "X", "Y", "Z"],
};
let result = 0;
for (let letter of input) {
  for (let check in callingTime) {
    if (callingTime[check].includes(letter)) {
      result += Number(check);
    }
  }
}
console.log(result);
