const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [startNum, endNum] = input.map(n=>Number(n));

const notPrime = {1:true};
// 아리스토텔리스의 체
//배수가 되면 1을 제외한 수로도 나눠지기 때문에 소수가 아님
//2부터 n까지 자신을 제외한 배수를 제거하면 소수가 남음
for (let i = 2; i <= Math.ceil(Math.sqrt(endNum)); i++) { //1은 소수가 아니니까 2부터 마지막 값을 루트한 수까지 확인
  if (notPrime[i]) {
     continue;
  }

  // 제곱된 수가 끝 값보다 작으면 그것의 배수들은 모두 소수가 아님
  for (let j = i ** 2; j <= endNum; j += i) {      
     notPrime[j] = true;
  }
}


// 시작부터 끝까지 반복문 돌려서 결과 확인
//object에 속하지 않으면 소수
const result = [];
for (let i = startNum; i <= endNum; i++) {
   if (!notPrime[i]) {
       result.push(i);
   }
}

console.log(result.join("\n"))