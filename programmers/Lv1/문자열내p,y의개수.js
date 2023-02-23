function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    const str = s.toLowerCase().split("");
    let pCount = 0;
    let yCount = 0;
    str.forEach(el=>{
        if(el==="p")pCount++;
        else {
            if(el==="y")yCount++;
        }
    })
    console.log(pCount, yCount)
    if(pCount!==yCount){
        answer = false;
        return answer;
    }

    return answer;
}