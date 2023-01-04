const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const constructNum = (num) => {
    let result = 0;
    num = String(num);
    const numLength = num.length;
    let check = 0;
    while(check<numLength){
        result+=Number(num[check]);
        check++;
    }
    result+=Number(num);
    return result;
}

let check = 0;
let answer = 0;
while(check<input){
    if(constructNum(check)===input){
         answer = check;
        break;
    }
    check++;
}

console.log(answer);