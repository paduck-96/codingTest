const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const reservNum = Number(input.shift());

let whileStart = 0;
while (whileStart < reservNum) {
  const [HEIGHT, WIDTH, TURN] = input[whileStart]
    .split(" ")
    .map((n) => Number(n));
    const customHeight = TURN%HEIGHT;
    if(customHeight == 0 ) customHeight = HEIGHT;
    let customWidth = Math.ceil(TURN/HEIGHT).toString();
    if(customWidth.length == 1){
        customWidth = String(0) + customWidth;
    }
    console.log(customHeight.toString()+customWidth)
  whileStart++;
}