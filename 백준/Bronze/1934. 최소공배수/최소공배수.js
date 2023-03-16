const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const CASES = Number(input.shift());

let answer = [];

for(let i =0; i<CASES;i++){
    let [first, second] = input[i].split(" ").map(n=>Number(n));

    let divF = first;
    let divS = second;
    while(first%second!==0){
        let biggest = first % second;

        if(biggest!==0){
            first = second;
            second = biggest;
        }
    }
    answer.push(divF*(divS/second))
}

console.log(answer.join("\n"));