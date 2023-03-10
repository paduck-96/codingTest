const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const MOD = 10007;

let desc = [[],[1,1,1,1,1,1,1,1,1,1]]
let LENGTH = input-1;
while(LENGTH--){
    desc.push(Array.from({length:10}));
}

for(let len=2; len<=input; len++){
    for(let i =0; i< 10; i++){
        if(i===0){
            desc[len][i] = desc[len-1][i] % MOD;
        }else{
            desc[len][i]=(desc[len-1][i]+desc[len][i-1])%MOD;
        }
    }
}

console.log(desc[input].reduce((sum, now)=>sum+now,0)%MOD);