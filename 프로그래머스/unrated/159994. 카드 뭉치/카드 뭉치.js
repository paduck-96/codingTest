function solution(cards1, cards2, goal) {
    let answer = "Yes";
    goal.forEach(el=>{
            if(cards1.indexOf(el)===0){
                cards1 = cards1.slice(1);
            }else if(cards2.indexOf(el)===0){
                cards2=cards2.slice(1)
            }else{
                answer="No";
            }
    })
    //if(cards1.length===0&&cards2.length===0)answer="Yes"
    return answer
}