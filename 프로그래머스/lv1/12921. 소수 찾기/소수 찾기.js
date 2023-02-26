function solution(n) {
    var answer = 0;
    if(n<=1)answer = 0;
    else{
        const notPrime = {1:true}
        for(let i =2; i<=Math.ceil(Math.sqrt(n));i++){
            if(notPrime[i])continue;
            for(let j =i**2;j<=n;j+=i){
                notPrime[j]=true
            }
        }
        for(let i =2;i<=n;i++){
            if(!notPrime[i])answer++
        }
    }
    return answer;
}