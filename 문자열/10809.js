const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let checkAlp = [];
let result = [];
let cnt = 97;
while (cnt < 123) {
  checkAlp.push(String.fromCodePoint(cnt));
  cnt++;
}

for (let i = 0; i < checkAlp.length; i++) {
  if (input.includes(checkAlp[i])) {
    result.push(input.indexOf(checkAlp[i]));
  } else {
    result.push(-1);
  }
}
console.log(result.join(" "));
