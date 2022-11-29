const d = (number) => {
  let sum = 0;
  let count = 0;
  let num = number;
  sum += number;
  while (count < String(number).length) {
    sum += num % 10;
    num = Math.floor(num / 10);
    count++;
  }
  return sum;
};

const check = new Array(10000);
check.fill(true);
let i = 1;
while (i <= 10000) {
  check[d(i)] = false;
  if (check[i]) {
    console.log(i);
  }
  i++;
}
