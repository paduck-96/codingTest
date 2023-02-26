function solution(answers) {
    var answer = [];
    const supo1 = [1,2,3,4,5];
    let supo1Sum = 0;
    const supo2=[2,1,2,3,2,4,2,5]
    let supo2Sum = 0;
    const supo3=[3,3,1,1,2,2,4,4,5,5]
    let supo3Sum = 0;
    for(let i =0;i<answers.length;i++){
        if(supo1[i%supo1.length]===answers[i]){
            supo1Sum++;
        }
        if(supo2[i%supo2.length]===answers[i]){
            supo2Sum++;
        }
        if(supo3[i%supo3.length]===answers[i]){
            supo3Sum++;
        }
    }
    let max = Math.max(supo1Sum, supo2Sum, supo3Sum)
    if(max===supo1Sum)answer.push(1)
    if(max===supo2Sum)answer.push(2)
    if(max===supo3Sum)answer.push(3)
    return answer;
}