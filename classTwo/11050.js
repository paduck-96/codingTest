const fs = require('fs');
   const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
   const [n, k] = input;
const bin = (n, k) => {
if(k== 0 || n == k){
  return 1;
}
return bin(n-1, k) + bin(n-1, k-1);
}
console.log(bin(n,k))