function solution(clothes) {
    var answer = 0;
    let clotheType = {};
    clothes.forEach(([name, category])=>{
      if(!clotheType[category]){
          clotheType[category]=1;
      }else{
          clotheType[category]++;
      }
    });
    
    answer=1;
    for(let category in clotheType){
        answer*=(clotheType[category]+1);
    }
    return answer-1;
}