
function solution(x, n) {
    var answer = [];
    answer.push(x);
    for(let i = 2; i<=n; i++){
        answer.push(x*i);
    }
    return answer;
}