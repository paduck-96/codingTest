function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length>0){
        for(let i =0; i<progresses.length;i++){
            progresses[i] += speeds[i];
        }
        let deploy = 0;
        while(progresses[0]>=100){
            progresses.shift();
            speeds.shift();
            deploy++;
        }
        if(deploy>0){
            answer.push(deploy);
        }
    }
    return answer;
}