function solution(n, m) {
    var answer = [];
    const minNum = Math.min(n,m);
    const maxNum = Math.max(n,m);
    let max = 0;
    for(let i =1; i<=minNum;i++){
        if(n%i===0 && m%i===0)max = i
        else continue;
    }
    let min = max*(minNum/max)*(maxNum/max)
    answer.push(max, min)
    return answer;
}