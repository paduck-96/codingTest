const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const strLength = Number(input.shift());
const hashArr = [...input[0]];
let R = 1;
const M = 1234567891;
const alphaArr = [0];
for(let ch = 97; ch<=122;ch++){
  alphaArr.push(String.fromCharCode(ch));
}
let result = 0;
  hashArr.forEach((ch) => {
    result +=alphaArr.indexOf(ch)*R;
    result%=M;
    R*=31;
    R%=M;
  })
  console.log(result);