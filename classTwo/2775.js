const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = Number(input.shift());
for (let start = 0; start < testCase; start++) {
  const floor = Number(input.shift());
  const room = Number(input.shift());
  const apt = Array.from(Array(floor + 1), () => Array(room + 1).fill(0));
  for (let startRoom = 1; startRoom <= room; startRoom++) {
    apt[0][startRoom] = startRoom;
  }
  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j <= room; j++) {
      apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
    }
  }
  console.log(apt[floor][room]);
}
