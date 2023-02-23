function solution(x) {
    var answer = true;
    let sum = 0;
    x.toString().split("").forEach(el=>{
        sum+=Number(el);
    })
    if(x%sum!==0){
        answer = false;
        return answer;
    }
    return answer;
}