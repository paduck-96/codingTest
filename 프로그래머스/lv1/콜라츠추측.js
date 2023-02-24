function solution(num) {
    var answer = 0;
    let cnt = 0;
    while(true){
        if(cnt===500){
            cnt=-1;
            break;
        }
        if(num===1)break;
        if(num%2===0){
            cnt++;
            num=num/2}
        else{
            cnt++;
            num=3*num+1
        }
    }
    answer = cnt;
    return answer;
}