function solution(numbers) {
    var answer = [];
    let answerSet = new Set([]);
    for(let main = 0; main<numbers.length;main++){
        for(let idx = main+1; idx<numbers.length;idx++){
            answerSet.add(numbers[main]+numbers[idx])
        }
    }
    answer = [...answerSet]
    return answer.sort((a,b)=>a-b)
}