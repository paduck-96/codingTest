const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input.shift().split(" ").map(Number);
const chars = input[0].split(" ").sort();

const vowels = ["a", "e", "i", "o", "u"];

const generatePassword = (start, length, password) => {
  if (length === L) {
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of password) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
    // 문제 조건
    if (vowelCount >= 1 && consonantCount >= 2) {
      console.log(password.join(""));
    }
    return;
  }

  for (let i = start; i < C; i++) {
    generatePassword(i + 1, length + 1, password.concat(chars[i]));
  }
};

generatePassword(0, 0, []);