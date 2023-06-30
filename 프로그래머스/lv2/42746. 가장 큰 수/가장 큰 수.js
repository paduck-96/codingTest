function solution(numbers) {
    const strNums = numbers.map(num => num.toString());
    
    strNums.sort((a, b) => (b + a) - (a + b));
    
    const answer = strNums.join('');
    
    return answer[0] === '0' ? '0' : answer;
}