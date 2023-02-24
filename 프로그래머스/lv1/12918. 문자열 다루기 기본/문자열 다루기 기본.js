function solution(s) {
    const arr = s.split("");
    if(arr.length===4 || arr.length===6){
        for(let i in arr){
            if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122)return false;
              if(s.charCodeAt(i)>=65&&s.charCodeAt(i)<=90)
                return false;
        }
    }else{
        return false;
    }
    return true;
}