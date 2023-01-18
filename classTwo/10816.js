const fs = require('fs');
const [totalCard, totalCardList, sgCard, sgCardList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalArr = totalCardList.split(" ");
const sgArr = sgCardList.split(" ");
const result = [];
sgArr.forEach(el => {
  let num = 0;
  totalArr.forEach(check => {
    if(el == check) {
      num+=1;
    }
  })
  result.push(num);
})
console.log(result.join(" "));