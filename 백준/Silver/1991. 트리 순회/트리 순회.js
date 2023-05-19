const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const NODES = Number(input[0]);

// 트리
const TREE = {};
// 트리 구조
input.slice(1).forEach((line) => {
  const [NODE, LEFT, RIGHT] = line.split(" ");
  TREE[NODE] = { LEFT, RIGHT };
});

// 순회
const PRE = (node) => {
  if (node === ".") return "";
  return node + PRE(TREE[node].LEFT) + PRE(TREE[node].RIGHT);
};

const IN = (node) => {
  if (node === ".") return "";
  return IN(TREE[node].LEFT) + node + IN(TREE[node].RIGHT);
};

const POST = (node) => {
  if (node === ".") return "";
  return POST(TREE[node].LEFT) + POST(TREE[node].RIGHT) + node;
};

//결과
console.log(PRE("A"));
console.log(IN("A"));
console.log(POST("A"));
