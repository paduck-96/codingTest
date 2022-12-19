// 입력 값 받아오기
//index 별로 확인할 숫자 하나
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 각 input의 항목 확인하기
//배열 요소로 나누기 위해 문자열 형태 유지
const inputL = input.length;
let check = 0;
// 결과값 받아오는 배열
let result = [];
while(check<inputL){
    // 0일 경우 반복문 탈출
    if(input[check].length==1 && input[check] == 0) break;
    // 하나의 문자열을 각각으로 쪼개 배열에 집어넣고
    //이 문자열과 이를 reverse 한 문자열을 비교해
    //펠린드롬 여부를 확인
    let checkArr = [];
    let pelArr = [];
    checkArr.push(...input[check]);
    pelArr.push(...input[check]);
    if(checkArr.toString() === pelArr.reverse().toString()){
        result.push("yes");
    }else{
        result.push("no");
    }
    check++;
}

console.log(result.join("\n"));