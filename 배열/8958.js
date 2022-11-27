const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const time = Number(input[0]);
let totalScore = 0;
let checkScore = 0;
let result = [];
let count = 1;
while(count<=time){
    for(let num = 0; num<input[count].length-1;num++){
        if(input[count][num]==="O"){
            checkScore+=1;
            }
        if(input[count][num]==="X"){
            checkScore=0;
            }
        totalScore += checkScore;
    }
    count++;
    result.push(totalScore);
    totalScore = 0;
    checkScore=0;
}
console.log(result.join("\n"));