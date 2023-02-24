function solution(s) {
    var answer = '';
    const sL = s.length;
    if(sL%2!==0){
        answer = s[Math.floor(sL/2)];
    }else{
        answer += s[sL/2-1];
        answer += s[sL/2];
    }
    return answer;
}