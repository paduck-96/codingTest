const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const peoples = Number(input.shift());
const peopleArr = input.map((el) => el.trim().split(" "));
peopleArr.sort((a, b) => a[0] - b[0]);
peopleArr.forEach((el) => console.log(el.join(" ")));
