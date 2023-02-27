function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a);
    for(let i =0; i<score.length;i+=m){
        let maxApp = score.slice(0+i,m+i)[m-1]
        if(maxApp===undefined)continue;
        answer+=maxApp*m*1;
    }
    return answer;
}