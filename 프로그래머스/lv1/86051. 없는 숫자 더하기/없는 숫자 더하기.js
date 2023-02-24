function solution(numbers) {
    var answer = 0;
    const check = Array.from({length:10}).fill(0);
    numbers.forEach(el=>{
        check[el]=1;
    })
    const result = check.filter((el, idx)=>{
        if(el===0){
            answer+=Number(idx);
        }
    })
    return answer;
}