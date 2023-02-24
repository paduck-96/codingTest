function solution(n)
{
    let answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let arr = n.toString().split("").map(n=>Number(n));
    arr.forEach(el=>answer+=el)

    return answer;
}