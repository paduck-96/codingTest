function solution(s) {
    var answer = [];
    let checkArr = [];
    for(let i =0; i<s.length;i++){
        if(!checkArr.includes(s[i])) {
            checkArr.push(s[i])
            answer.push(-1)
        }
        else {
            answer.push(i-checkArr.indexOf(s[i]))
            checkArr[checkArr.indexOf(s[i])]=null;
            checkArr.push(s[i])
        }
    }
    return answer;
}