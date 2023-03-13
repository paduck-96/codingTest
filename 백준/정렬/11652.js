const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(BigInt);

let cardsMap = new Map();

for(let i =0; i<input.length; i++){
    cardsMap.get(input[i])?cardsMap.set(input[i], cardsMap.get(input[i])+1):cardsMap.set(input[i], 1)
}

let result = [...cardsMap].sort((a,b)=>{
    if(b[1]<a[1])return -1;
    else if(b[1]>a[1]) return 1;
    else{
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        else return 0;
    }
})

console.log(result[0][0].toString())