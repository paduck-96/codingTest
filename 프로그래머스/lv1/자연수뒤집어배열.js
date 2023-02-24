function solution(n) {
    var answer = [];
    let num = n.toString().split("").map(n=>Number(n));
    answer = answer.concat(num.reverse());
    return answer;
}