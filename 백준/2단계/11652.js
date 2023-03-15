const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(BigInt);

let cardsSet = new Map();

input.forEach(el=>{
    cardsSet.has(el)?cardsSet.set(el, cardsSet.get(el)+1):cardsSet.set(el, 1);
})

let cardSetArr = [...cardsSet];
cardSetArr.sort((a,b)=>{
    if(b[1]<a[1]) return -1;
    else if(b[1]>a[1]) return 1;
    else{
        if(a[0]<b[0])return -1;
        if(a[0]>b[0])return 1;
        else return 0;
    }
})

console.log(cardSetArr[0][0].toString())