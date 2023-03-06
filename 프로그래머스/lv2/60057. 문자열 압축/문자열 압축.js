function solution(s) {
    var answer = [];
    for(let i =1; i<=s.length;i++){
        answer.push(stringSplit(s, i).length);
    }
    return Math.min(...answer);
}

const stringSplit = (str, splitNum) => {
    let newStr = "";
    let cnt = 1;
    let i =0;
    while(i<str.length){
        let splitCh = str.substring(i, i+splitNum);
        let nextSplitCh = str.substring(i+splitNum, i+splitNum+splitNum);
        if(splitCh===nextSplitCh){
            cnt++;
        }else{
            if(cnt===1){
                newStr += splitCh;
            }else{
                newStr += cnt+splitCh;
                cnt = 1;
            }
        }
        i+=splitNum;
    }
    return newStr;
}