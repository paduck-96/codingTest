const startTime = new Date().getTime();
//변경 시작

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const score = input[1].split(" ").map(n=>Number(n));
const max = Math.max(...score);
let modifyScore = 0;

let time =0;
while(time<Number(input[0])){
    modifyScore+=score[time]/max*100;
    time++;
}
console.log(modifyScore/input[0])

//변경 끝
const endTime = new Date().getTime();
console.log(endTime-startTime);