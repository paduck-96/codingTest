const fs = require("fs");
const input = fs.readFileSync("sample.txt").toString().trim().split("\n");
// shift 메서드를 활용해 input[0]의 조건 출력하고
//문제로 주어지는 W,B의 값을 배열로 저장한다.
const [height, width] = input.shift().split(" ").map(n=>Number(n));

const minArr = [];

// 정답을 미리 생성한 후
//각 자리를 비교하는 방법이
//브루트포스 알고리즘에서 가정 최적의 방법인듯?

const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
    ];
     
    const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
    ];

    // 보드판과 비교 함수
    //
const whiteFirstBoard = (height, width) => {
    // 변경 횟수 계산
    let counter = 0;

    // 높이 기준 비교
    //8행을 가지기 때문에 8번
    for(let i=height;i<height+8;i++){
        //8열을 가지기 때문에 8번
        for(let j=width;j<width+8;j++){
            //현재 input에는 문제에서 주어지는 전체 보드판 들어가있음
            //함수 매개변수로 8개씩 돌 판의 범위가 주어짐
            //각 판의 첫 행 과 첫 열
            if(input[i][j] !== whiteFirst[i-height][j-width])counter++;
        }
    }
    return counter;
}
const blackFirstBoard = (height, width) => {
    let counter = 0;
    for(let i=height;i<height+8;i++){
        for(let j=width;j<width+8;j++){
            if(input[i][j] !== whiteFirst[i-height][j-width])counter++;
        }
    }
    return counter;
}

// 모든 경우의 수에 따른 확인 진행
//문제에서 주어지는 전체 보드에서 8x8을 추출하는 것이기 때문에
//행, 열에서 8개를 빼면 각 행, 열이 몇 번씩 옮겨져야하는지 알 수 있음
//count를 확인해야하는 보드 경우의 수
for(let i =0; i+7<height;i++){
    for(let j=0; j+7<width;j++){
        minArr.push(whiteFirstBoard(i,j));
        minArr.push(blackFirstBoard(i,j))
    }
}

console.log(Math.min.apply(null, minArr));