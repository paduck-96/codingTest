function solution(s) {
    var answer = 0;
    //const engArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    const engObj = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9}
    for(let idx in engObj){
        if(s.includes(idx)){
            s=s.replaceAll(idx,engObj[idx])
        }
    }
    answer = Number(s);
    return answer;
}