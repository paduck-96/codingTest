function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b)=>a-b);
    let result = arr.filter(el=>el%divisor===0)
    if(result.length===0)answer.push(-1);
    else answer.push(...result)
    return answer;
}