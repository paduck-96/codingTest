const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 값이 커질 경우 나눌 수
const MOD = 1000000000;

// 1자릿수의 배열은 존재
let FILL = input-1;
// 보기 편하게 0 채우기
let result = [[],[0,1,1,1,1,1,1,1,1,1]];
// 구하는 수만큼 배열 생성
//자스는 크기 지정 안해도 입력 값에 맞춰 새값 추가 가능
while(FILL){
    result.push(Array.from({length:10}))
    FILL--;
}

// 2부터 주어지는 값까지
for(let len =2; len<=input;len++){
    // 자릿수는 0~9까지 있으니까 반복
    for(let i =0; i<10; i++){
        //끝이 0이면 1만 계단 수
        if(i===0){
            result[len][i]=result[len-1][i+1] % MOD
        }else{
            //끝이 9면 8만 계단수
            if(i===9){
                result[len][i]=result[len-1][i-1] % MOD
            }else{
                //나머지는 앞,뒤가 계단수
                result[len][i]=(result[len-1][i-1]+result[len-1][i+1])%MOD
            }
        }
    }
}

console.log(result[input].reduce((sum,now)=>sum+now,0)%MOD)