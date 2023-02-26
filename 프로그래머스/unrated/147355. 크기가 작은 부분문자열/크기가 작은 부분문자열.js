function solution(t, p) {
    var answer = 0;
    let cutL = p.length;
    let newArr = [];
    for(let i =0; i<=t.length-cutL;i++){
        newArr.push(t.slice(0+i,cutL+i))
    }
    answer = newArr.filter(el=>{
        return el<=p
    }).length
    return answer;
}