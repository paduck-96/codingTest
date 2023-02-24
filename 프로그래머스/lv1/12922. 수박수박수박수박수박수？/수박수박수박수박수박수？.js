function solution(n) {
    var answer = '';
    const str = ["수", "박"];
    let start = 0;
    for(let i =0; i<n;i++){
        if(start===2)start=0;
        answer +=str[start];
        start++;
    }
    return answer;
}