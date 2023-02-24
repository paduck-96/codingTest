function solution(n) {
    var answer = 0;
    answer = n.toString().split("").sort((a,b)=>b-a).join("")/1;
    return answer;
}