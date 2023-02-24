function solution(price, money, count) {
    var answer = -1;
    let sum = price;
    for(let i =2; i<=count;i++){
        sum+=price*i;
    }
    if(money>=sum){
        answer = 0
    }else{
        answer = sum-money;
    }
    return answer;
}