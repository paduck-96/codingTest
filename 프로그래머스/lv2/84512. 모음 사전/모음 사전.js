function solution(word) {
    let answer = 0;
    
    const characters = ['A', 'E', 'I', 'O', 'U'];
    const cases = [781, 156, 31, 6, 1];
    
    for(let i=0; i<word.length; i++){
        for(let j=0; j<5; j++){
            if(word[i] === characters[j]){
                answer += cases[i] * j + 1;
            }
        }
    }
    
    return answer;
}