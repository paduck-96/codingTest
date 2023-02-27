function solution(N, stages) {
    var answer = [];
    let result = [];
    const stageFail = Array.from({length:N+1}).fill(0)
    stages.forEach(el=>{
        stageFail[el]+=1
    })
    const stageTotal = Array.from({length:N+1}).fill(0)
    for(let i =1;i<stageTotal.length;i++){
        if(stages.includes(i)){
         stageTotal[i]=stages.filter(el=>el>=i).length   
        }
        if(isNaN(stageFail[i]/stageTotal[i]))result.push([0,i])
     else result.push([stageFail[i]/stageTotal[i],i])   
    }
    result.sort((a,b)=>b[0]-a[0]);
    result.forEach(el=>{
        answer.push(el[1])
    })
    return answer
}