const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let start = 0,
  end = 0,
  sum = 0,
  count = 0;

while (true) {
  if (end > N || start > N) break;

  if (sum < M) {
    sum += numbers[end];
    end++;
  } else if (sum > M) {
    sum -= numbers[start];
    start++;
  } else {
    count++;
    sum -= numbers[start];
    start++;
  }
}

console.log(count);