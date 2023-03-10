const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = [0,1,1];

for(let i =3; i<=input;i++){
    //경우에 따라 최대 정수값을 넘는 범위가 생긴다고함
    //Bigint 처리
    result[i] = BigInt(result[i-1])+BigInt(result[i-2]);
}

//Bigint의 경우 출력값 변화 필요
console.log(String(result[input]));