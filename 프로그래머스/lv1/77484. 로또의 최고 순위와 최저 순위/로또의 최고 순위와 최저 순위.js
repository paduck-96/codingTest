function solution(lottos, win_nums) {
    var answer = [];
    let min = 0;
    let max = 0;
    let toWin = win_nums.filter(el=>{
        if(!lottos.includes(el))return el
    }).length;
    let canChange = lottos.filter(el=>el===0).length;
    const getNum = 6-toWin;
    // getNum을 통해 변경 전 등수 확인 가능
    if(getNum<2){
        min = 6;
    }else if(getNum<3){
        min=5;
    }else if(getNum<4){
        min=4;
    }else if(getNum<5){
        min=3;
    }else if(getNum<6){
        min=2;
    }else{
        min=1;
    }
    if(getNum+canChange<2){
        max = 6;
    }else if(getNum+canChange<3){
        max=5;
    }else if(getNum+canChange<4){
        max=4;
    }else if(getNum+canChange<5){
        max=3;
    }else if(getNum+canChange<6){
        max=2;
    }else{
        max=1;
    }
    answer.push(max)
    answer.push(min)
    return answer;
}