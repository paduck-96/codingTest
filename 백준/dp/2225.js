const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const [N,K] = fs.readFileSync(filePath).toString().trim().split(" ").map(n=>Number(n));
const MOD = 1000000000;
let result = [];
for(let i =1; i<=K;i++){
    result[i] = Array.from({length:N+1}).fill(i===1?1:0)
    result[i][0] = 1;
}

for(let i =2; i<=K;i++){
    for(let j =1; j<=N;j++){
        result[i][j] = result[i-1].slice(0, j+1).reduce((sum, now)=>sum+now,0)%MOD;
    }
}

console.log(result[K][N])