function solution(s) {
    var answer = 0;
    const str = s.split("")
    answer = spliceString(str,0)
    return answer;
}

const spliceString = (str, cnt) => {
    let same = 0;
    let noSame = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[0]) same++
        else noSame++;

        if (i == str.length - 1) {
            str.splice(0, same + noSame)
            cnt++
            return cnt
        }

        if (same == noSame) {
            str.splice(0, same + noSame)
            cnt++
            return spliceString(str,cnt)
        }
    }
}