const fs = require('fs');
const input = fs.readFileSync("samples.txt").toString().trim().split("\n");
const [LENGTH, WIDTH, INVEN] = input.shift().split(" ").map(n=>Number(n));
const LAND = input.map(el => el.split(" ").map(n=>Number(n)));
const answer = [];
for(let height=256; height>=0;height--){
  let addBlock = 0;
  let removeBlock = 0;
  let inven = INVEN;
  let time= 0;
  for(let i =0; i<LENGTH; i++){
    for(let j=0; j<WIDTH; j++){
      if(LAND[i][j] > height){
        removeBlock += LAND[i][j]-height;
        inven += LAND[i][j]-height;
      }else if(LAND[i][j] < height){
        addBlock += height - LAND[i][j];
        inven -= height - LAND[i][j];
      }
      time = removeBlock*2+addBlock;
    }
  }
  if(inven<0) answer.push([Number.MAX_SAFE_INTEGER,height]);
  else answer.push([time, height])
}
answer.sort((a,b)=>{
  if(a[0]==b[0]) return b[1]-a[1];
  else return a[0]-b[0]
})
console.log(answer[0].join(" "));