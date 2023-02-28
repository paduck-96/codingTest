function solution(number, limit, power) {
    var answer = 0;
    
    const yak = (num)=>{
        let result = 0;
        let mid = Math.sqrt(num);
        for(let i=1;i<=mid;i++){
            if(i**2==num){
                result++;
            }
            else{
                if(num%i==0)result+=2;
            }
        }
        return result;
    }

    for(let i=1;i<=number;i++){
        let pow = yak(i);
        if(pow>limit){
            answer+=power;
        }else{
            answer+=pow;
        }
    }
    
    return answer;
}