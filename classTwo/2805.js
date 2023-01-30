const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [treeNum, wantTree] = input[0].split(" ").map(n=>Number(n));
const trees = input[1].split(" ").map(n=>Number(n));
const maxTree = Math.max(...trees)
let answer = 0;
let start = 0;
let end = maxTree;
while(start<=end){
  let check = Math.floor((start+end)/2);
  let result = 0;
  trees.forEach(tree => {
    if(tree>=check){
      result +=tree-check
    }
  })

    if(result>=wantTree){
      if(check>answer)answer = check;
      start = check+1;
    }else{
      end = check-1;
    }
}
console.log(answer)