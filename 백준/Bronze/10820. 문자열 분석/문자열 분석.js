const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let iter = input.length;
let ans = [];

for(let i = 0; i < iter; i++){
    let inputArr = input[i].split("");
    
    if(inputArr.length === 0) continue;
    
    let strArr = [0,0,0,0];
    
    for(let str of inputArr){
        let ascii = str.charCodeAt();
        
        if(ascii >= 97 && ascii <= 122){
            strArr[0]++;
        } else if(ascii >= 65 && ascii <= 90){
            strArr[1]++;
        } else if(ascii >= 48 && ascii <= 57){
            strArr[2]++;
        } else if(ascii === 32) {
            strArr[3]++;
        }
    }
    
    ans.push(strArr.join(" "));
}

console.log(ans.join("\n"));