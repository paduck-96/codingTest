function solution(a, b) {
    var answer = 0;
    
    const sumF = (small,big)=>{
        let result = 0;
        for(let i = small;i<=big;i++){
            result +=i;
        }
        return result;
    }
    if(a>b) answer = sumF(b,a)
    else answer=sumF(a,b)
    return answer;
}