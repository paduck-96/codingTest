const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\n");
const [height, width] = input[0].split(" ").map((n) => Number(n));

let toggleCount = [];
// W,B 토글
const toggle = (letters)=>{
  let count = 0;
  let check = letters.length-1;
  let arr = [...letters];
  let start = 0;
  if(arr[start]!=arr[check]){
    let wlength = arr.filter(e=>e==="W").length;
    let blength = arr.filter(e=>e==="B").length;
    if(wlength>blength){
      if(arr[start]!="B"){arr[start]="B";
      count+=1;
    }
      if(arr[check]!="B"){
        arr[check]="B";
        count+=1;
      }
    }else if(wlength<blength){
      if(arr[start]!="W"){arr[start]="W";
      count+=1;
    }
      if(arr[check]!="W"){
        arr[check]="W";
        count+=1;
      }
    }
  }
  while(start<check){
    if(start%8!==7){
      if(arr[start]==arr[start+1]){
        if(arr[start] == "W")arr[start+1]="B";
        if(arr[start]=="B")arr[start+1]="W";
        count+=1;
      }
      if(arr[start]==arr[start+8]){
        if(arr[start] == "W")arr[start+8]="B";
        if(arr[start]=="B")arr[start+8]="W";
        count+=1;
      }
    }else{
      
    }
    start++;
  }
  toggleCount.push(count);
  return toggleCount;
}

// 8x8 보드 찍어내기
let checkBoard = [];
let result ="";
let heightIndex = 0;

for(let heightCheck = 0; heightCheck<=height-8; heightCheck++){
  for(let widthCheck = 0; widthCheck<=width-8; widthCheck++){
    heightIndex = 0;
    result="";
    while(heightIndex<8){
      result +=input[heightIndex+heightCheck+1].substr(widthCheck,8)
      heightIndex++;
    }
    checkBoard.push(result);
  }
  }

  // 각 보드를 확인하기
  let checkBoardLength = checkBoard.length;
  let time = 0;
  let answer;
  while(time<checkBoardLength){
    answer = toggle(checkBoard[time]);
    time++;
}

//결과
console.log(Math.min(...answer));