function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    let start = 0;
    while(budget>=0){
        budget-=d[start]
        answer++;
        start++;
    }
    return answer-1
}