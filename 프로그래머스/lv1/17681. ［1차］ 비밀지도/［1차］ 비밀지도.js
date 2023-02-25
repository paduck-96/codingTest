function solution(n, arr1, arr2) {
    var answer = [];
    
    const decode = (num)=>{
        let map = [];
        let start = 0;
        while(start<n){
            if(num%2===1) map.push("#")
            else map.push(" ")
            num=Math.floor(num/2)
            start++;
        }
        return map.reverse();
    }
    
    for(let i =0; i<arr1.length;i++){
        let row = ""
        const map1 = decode(arr1[i])
        const map2 = decode(arr2[i])
        for(let i =0; i<map1.length;i++){
            if(map1[i]!==map2[i])row+="#"
            else row+=map1[i]
        }
        answer.push(row)
    }
    
    return answer;
}