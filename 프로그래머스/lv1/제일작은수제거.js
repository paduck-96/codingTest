function solution(arr) {
    var answer = [];
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        min = Math.min(arr[i], min);
    }
    arr.splice(arr.indexOf(min),1);
    if(arr.length===0){
        answer = [-1];
        return answer;
    }
    answer = arr;
    return answer;
}