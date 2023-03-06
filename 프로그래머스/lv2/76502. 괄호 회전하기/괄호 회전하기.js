const checkBracket = (str)=>{
    let stack = [];
    const map = {
        "[":"]",
        "(":")",
        "{":"}"
    }
    let strA = str.split("");
    for(let i =0; i<strA.length;i++){
        if(strA[i]==="[" || strA[i]==="(" || strA[i]==="{" ){
            stack.push(strA[i]);
        }else{
            if(i===0) return false;
            else{
                let mapCheck = stack.pop();
                if(strA[i]!==map[mapCheck]) return false;
            }
        }
    }
    if(stack.length===0)return true;
    return false;
}

function solution(s) {
    var answer = 0;
    let sArr = s.split("");
    for(let i =0; i<s.length;i++){
        if(checkBracket(sArr.join("")))answer++;
        let goEnd = sArr.shift();
        sArr.push(goEnd);
    }
    return answer;
}