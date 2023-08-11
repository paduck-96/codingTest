const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let start = 0,
  end = 0,
  sum = 0,
  minLength = Infinity;

while (end <= N) {
  if (sum < S && end < N) {
    sum += numbers[end];
    end++;
  } else if (sum >= S) {
    minLength = Math.min(minLength, end - start);
    sum -= numbers[start];
    start++;
  } else {
    break;
  }
}

console.log(minLength === Infinity ? 0 : minLength);