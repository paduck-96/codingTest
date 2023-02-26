function solution(array, commands) {
    var answer = [];
    for(let i =0; i<commands.length;i++){
     const [startIdx, endIdx, target] = commands[i]
    let arr = array.slice(startIdx-1, endIdx);
    answer.push(arr.sort((a,b)=>a-b)[target-1])
    }
    return answer;
}