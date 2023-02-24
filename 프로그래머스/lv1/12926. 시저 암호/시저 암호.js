function solution(s, n) {
    var answer = '';
    let strArr = s.split("");
    strArr.forEach(el=>{
        let asc = el.charCodeAt(0);
        if(el.match(/[a-z]|[A-Z]/)){
            if(asc>=65&&asc<=90){
                asc+=n;
                if(asc>90){
                    asc-=26
                }
            }
            else if(asc>=97&&asc<=122){
                asc+=n;
                if(asc>122){
                    asc-=26
                }
            }
        }
        answer+=String.fromCharCode(asc)
    })
    return answer;
}