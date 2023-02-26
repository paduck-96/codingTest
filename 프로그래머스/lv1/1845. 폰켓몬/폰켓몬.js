function solution(nums) {
    var answer = 0;
    let takePok = nums.length/2;
    let pokCom = new Set([]);
    for(let i =0; i<nums.length;i++){
        pokCom.add(nums[i])
    }
    if(pokCom.size>takePok){
        answer=takePok
    }else{
        answer=pokCom.size
    }
    return answer;
}