const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [TOTALCOURSE, TARGET] = input.shift().split(" ").map(Number);
let course = input[0].split(" ").map((num,idx)=>[Number(num), idx+1]);
let halfCourse = course.slice().reverse();
const COURSE = course.concat(halfCourse);

let current = 0;
for(let i =0; i<COURSE.length;i++){
    current += COURSE[i][0]

    if(TARGET<current){
      console.log(COURSE[i][1]);
      process.exit();
    }
  }