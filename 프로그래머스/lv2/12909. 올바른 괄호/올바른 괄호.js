function solution(s){
    var answer = true;
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i]===')'){
            if(!count) return false;
            count--;
        }else{
            count++;
        }
    }
    return count === 0;
}