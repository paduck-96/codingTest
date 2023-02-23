function solution(n) {
    var answer = 0;
    let start = 1;
    while(true){
        if(n%start === 1){
            answer = start;
            break;
        }
        start++;
    }
    return answer;
}