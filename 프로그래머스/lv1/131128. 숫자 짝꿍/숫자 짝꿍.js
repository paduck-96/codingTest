function solution(X, Y) {
    var answer = '';
    let xObj={}
    for(let i =0;i<X.length;i++){
        xObj[X[i]]?xObj[X[i]]+=1:xObj[X[i]]=1;
    }
    let yObj={}
    for(let i=0;i<Y.length;i++){
        yObj[Y[i]]?yObj[Y[i]]+=1:yObj[Y[i]]=1;
    }
    let xKey = Object.keys(xObj);
    let yKey = Object.keys(yObj);
    let duo = xKey.filter(el=>{
        return yKey.includes(el)
    })
    if(duo.length===0)answer="-1"
    else{
      duo.sort((a,b)=>b-a);
    for(let i =0; i<duo.length;i++){
        let repeats = Math.min(xObj[duo[i]],yObj[duo[i]]);
        answer+=duo[i].repeat(repeats)
    }
    }
    if(answer.split("").every(now=>now==0))answer="0"
    return answer;
}