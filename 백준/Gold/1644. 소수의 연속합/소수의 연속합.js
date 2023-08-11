const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const N = Number(fs.readFileSync(filePath).toString().trim());

// 소수 구하기
//바탕으로 가산
const getPrimes = (n) => {
  const isPrime = Array(n + 1).fill(true);
  const primes = [];

  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * 2; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primes;
};

const primes = getPrimes(N);

// 답 구하기
let start = 0,
  end = 0,
  sum = 0,
  count = 0;

while (end <= primes.length) {
  if (sum < N) {
    sum += primes[end++];
  } else if (sum > N) {
    sum -= primes[start++];
  } else {
    count++;
    sum -= primes[start++];
  }
}

console.log(count);