const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const editorStr = input.shift().split("");
let LINE = Number(input.shift());

const cursorStr = [];
for(let i =0; i<LINE; i++){
        if(input[i] === "L"){
            if(editorStr.length){
                cursorStr.push(editorStr.pop());
            }
        }
            else if(input[i] === "D"){
                if(cursorStr.length){
                    editorStr.push(cursorStr.pop())
                }
            }
             else if(input[i] === "B"){
                    if(editorStr.length){
                        editorStr.pop();
                    }
                }
                 else{
                        editorStr.push(input[i].split(" ")[1])
                 }
}

while(cursorStr.length){
    editorStr.push(cursorStr.pop())
}
console.log(editorStr.join(""))