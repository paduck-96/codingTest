const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const  gcd = (a,b)=>{
    let temp = 0;
    while(b!=0){
        temp = a%b;
        a=b;
        b=temp;
    }
    return a;
}

const CASES = Number(input.shift());
let answer = [];
for(let i =0; i<CASES;i++){
    let splitArr = input[i].split(" ");
    let nums = Number(splitArr.shift());
    let result = 0;
    for(let j = 0; j<nums-1;j++){
        for(let k =j+1;k<nums;k++){
            result += gcd(Number(splitArr[j]),Number(splitArr[k]))
        }
    }
    answer.push(result)
}

console.log(answer.join("\n"));