function solution(nums) {
    var answer = 0;
    const finish = nums.length
    
    nums.sort((a,b)=>b-a);
    let max = nums[0]+nums[1]+nums[2]
    const primeObj = {}
    
        for(let i =2; i<=Math.ceil(Math.sqrt(max));i++){
            if(primeObj[i])continue;
            for(let j = i**2;j<=max;j+=i){
                primeObj[j]=false
            }
        }
    for(let i =0;i<finish-2;i++){
        for(let j =i+1; j<finish-1;j++){
            for(let k=j+1;k<finish;k++){
                if(i!==j&&j!==k&&i!==k){
                    console.log(i,j,k)
                    let num = nums[i]+nums[j]+nums[k];
                    if(primeObj[num]===undefined)answer++
                }
            }
        }
    }
    
    console.log(answer)
    
    return answer;
}