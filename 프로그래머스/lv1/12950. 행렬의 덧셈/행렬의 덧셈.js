function solution(arr1, arr2) {
    var answer = [];
    let start = 0;
    while(start<arr1.length){
        let temp = [];
        for(let i =0; i<arr1[start].length;i++){
            temp.push(arr1[start][i] + arr2[start][i])
        }
        answer.push(temp)
        start++;
    }
    return answer;
}