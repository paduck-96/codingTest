const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\r\n");
const TIMES = Number(input.shift());

// 전체 테스트케이스 개수를 기준으로
//각 중요도와 중요도 배열을 하나의 케이스로 본다
//기준은 중요도 배열
let cases = 0;
while (cases < TIMES) {
  let testcase = cases * 2 + 1; //각 테스트케이스
  let [total, findIdx] = input[testcase - 1].split(" ");
  let queue = input[testcase].trim().split(" ");
  let cnt = 0;
  //하나의 테스트케이스에서 원하는 값 큐로 출력
  while (true) {
    //원하는 값이 될 때까지 무한 반복
    let max = Math.max(...queue); //최대값 유무를 통해 이동
    let check = queue.shift(); //최대값과 비교해 출력 유무 결정
    if (check == max) {
      cnt++; //출력
      if (findIdx == 0) {
        //출력 값과 찾으려는 위치가 모두 동일
        console.log(cnt);
        break;
      }
    } else {
      //가장 크지 않으면 맨 뒤로
      queue.push(check);
    }
    //que 작업 완료시 결국 찾으려는 위치는 하나 줄어든다(앞으로 온다)
    //인덱스 1 감소
    if (findIdx == 0) {
      findIdx = queue.length - 1;
    } else {
      findIdx--;
    }
  }
  cases++;
}
