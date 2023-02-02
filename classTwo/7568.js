const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const peoples = Number(input.shift());
const answer = [];
for (let personA = 0; personA < peoples; personA++) {
  let order = 0;
  for (let personB = 0; personB < peoples; personB++) {
    const [aWeight, aHeight] = input[personA].split(" ").map((n) => Number(n));
    const [bWeight, bHeight] = input[personB].split(" ").map((n) => Number(n));
    if (personA === personB) continue;
    if (aWeight < bWeight && aHeight < bHeight) {
      order += 1;
    }
  }
  answer.push(order + 1);
}
console.log(answer.join(" "));
