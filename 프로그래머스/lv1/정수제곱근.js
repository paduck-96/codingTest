function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if(!Number.isInteger(sqrt)){
        answer = -1;
        return answer;
    }else{
        answer = Math.pow(sqrt+1,2);
    }
    return answer;
}