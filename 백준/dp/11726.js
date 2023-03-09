const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

const MOD = 10007;
let result = [0,1,2];

for(let width =3; width<=input;width++){
    result[width] = (result[width-1]+result[width-2])%MOD
}

console.log(result[input])