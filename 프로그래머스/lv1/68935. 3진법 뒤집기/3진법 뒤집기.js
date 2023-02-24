function solution(n) {
    var answer = 0;
    let tri = "";
    while(true){
        tri += n%3;
        n=Math.floor(n/3);
        if(n===0)break;
    }
    let pow = 1;
    for(let i = 0; i<tri.length;i++){
        answer +=tri.split("").reverse()[i]*pow
        pow *= 3
    }
    return answer;
}