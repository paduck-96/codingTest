const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [cardCount, bjNum] = input
  .shift()
  .split(" ")
  .map((n) => Number(n));
const deck = input
  .toString()
  .split(" ")
  .map((el) => Number(el));
deck.sort((a, b) => b - a);

let firstSpace = 0;
let result = 0;
while (firstSpace < cardCount) {
  let secondSpace = 0;
  while (secondSpace < cardCount) {
    let lastSpace = 0;
    while (lastSpace < cardCount) {
      //모두 서로 다른 인덱스의 합 중에서 최대값 구하기
      if (
        firstSpace == secondSpace ||
        firstSpace == lastSpace ||
        secondSpace == lastSpace
      ) {
        lastSpace++;
        continue;
      }
      const max = deck[firstSpace] + deck[secondSpace] + deck[lastSpace];
      if (max > result && max <= bjNum) {
        result = max;
      }
      if (result == bjNum) {
        break;
      }

      lastSpace++;
    }
    secondSpace++;
  }
  firstSpace++;
}
console.log(result);
