function solution(food) {
    var answer = '';
    let left ="";
    for(let i =1; i<food.length;i++){
        if(food[i]%2===0){
            left+=i.toString().repeat(food[i]/2)
        }else{
            left+=i.toString().repeat((food[i]-1)/2)
        }
    }
    let right = left.split("").reverse().join("")
    answer = left+"0"+right
    return answer;
}