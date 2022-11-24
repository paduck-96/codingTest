const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const number = input.map(n=>Number(n));
let students = [];
for(let i=1; i<=30;i++){
    students.push(i);
}
i=0;
while(i<28){
    students.splice(students.indexOf(number[0]),1);
     number.splice(0,1);
    i++;
}
let result = Object.values(students);
console.log(Math.min(...result));
console.log(Math.max(...result));