const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [row, col] = input.shift().split(" ").map(Number);

// 현재 도착한 칸이 1일 때
// 상, 하, 좌, 우를 살펴 1인 값이 있을 경우 이동
// 
let visitArr = Array.from({length:row}).map(e=>Array.from({length:col}).fill(0));
const maze = [];
for(let i =0; i<row;i++){
    maze.push([...input[i].split("").map(Number)])
}

let queue = [[0,0]];
visitArr[0][0] = 1;
const canMove = [[0,-1],[0,1],[-1,0],[1,0]]
while(queue.length){
    const [rowX, colY] = queue.shift();
    if(!maze[rowX][colY])continue;
    maze[rowX][colY] = 0;

    for(let i =0; i<4;i++){
        const moveX = rowX+ canMove[i][0];
        const moveY = colY+ canMove[i][1];

        if(moveX<0 || moveY<0 || moveX>=row || moveY>=col) continue;
        if(maze[moveX][moveY]){
            queue.push([moveX,moveY])
            visitArr[moveX][moveY] = visitArr[rowX][colY] +1;
        }
    }
}

//console.log(visitArr);
console.log(visitArr[row-1][col-1])