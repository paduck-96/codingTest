function solution(k, score) {
    var answer = [];
    let checkArr = [];
    score.forEach(el=>{
        if(checkArr.length<k){
            checkArr.push(el);
            checkArr.sort((a,b)=>a-b);
            answer.push(checkArr[0])
        }
        else {
            if(Math.max(...checkArr)<el){
                checkArr.sort((a,b)=>a-b);
                checkArr.push(el);
                checkArr.shift();
                answer.push(checkArr[0])
            }else{
                if(Math.min(...checkArr)<el){
                    checkArr.sort((a,b)=>a-b);
                    checkArr.shift();
                    checkArr.unshift(el)
                    checkArr.sort((a,b)=>a-b);
                    answer.push(checkArr[0])
                }else{
                    answer.push(checkArr[0])
                }
            }
        }
    })
    return answer;
}