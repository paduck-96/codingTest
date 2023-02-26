function solution(a, b, n) {
    var answer = 0;
    let newCoke = 0;
    let leftCoke = 0;

    while(true){
        newCoke += Math.floor(n/a)*b
        leftCoke = n%a;
        n= Math.floor(n/a)*b + leftCoke;
        if(n<a)break;
    }
    answer = newCoke;
    return answer;
}