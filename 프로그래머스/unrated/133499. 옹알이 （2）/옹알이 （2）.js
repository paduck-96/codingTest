function solution(babbling) {
    var answer = 0;
    const canSpk = ["aya","ye","woo","ma"];
    const cant = ["ayaaya","yeye","woowoo","mama"]
    
    babbling.forEach(el=>{
        if(cant.some(nope=>el.includes(nope)))return;
        let start=0;
        while(true){
            if(start===4)break;
            el = el.replaceAll(canSpk[start]," ")
            start++;
        }
        el = el.replaceAll(" ","")
        console.log(el)
        if(el.length===0)answer++;
    })
    return answer;
}