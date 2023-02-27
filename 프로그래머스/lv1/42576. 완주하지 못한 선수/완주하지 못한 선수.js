function solution(participant, completion) {
    var answer = '';
    let ppl = {};
    participant.forEach(p => {
        ppl[p]?ppl[p]+=1:ppl[p]=1
    })
    completion.forEach(p=>{
        ppl[p]--;
    })
    answer = Object.keys(ppl).filter(p=>ppl[p]!==0).toString("");
    return answer;
}