function solution(dartResult) {
    var answer = 0;
    
    let temp = [];
    for(let i =0; i<dartResult.length;i++){
        if(dartResult[i].match(/[0-9]/)){
            if(dartResult[i]==1){
                if(dartResult[i+1]==0){
                    temp.push(dartResult[i]+dartResult[i+1])
                    i++;
                }else temp.push(dartResult[i])
            }else temp.push(dartResult[i])
        }else if(dartResult[i].match(/[A-Z]/)){
            let data = temp.pop();
            if(dartResult[i]==="S"){
                data = data**1;
                temp.push(data)
            }else if(dartResult[i]==="D"){
                data=data**2;
                temp.push(data)
            }else{
                data=data**3;
                temp.push(data)
            }
        }else{
            let data = temp.pop();
            if(dartResult[i]==="*"){
                data = data*2;
                if(temp.length===0)temp.push(data)
                else{
                    let data2 = temp.pop();
                    data2 = data2*2;
                    temp.push(data2);
                    temp.push(data)
                }
            }else{
                data = data*(-1)
                temp.push(data)
            }
        }
    }
    answer = temp.reduce((sum,now)=>sum+now,0)
    return answer;
}