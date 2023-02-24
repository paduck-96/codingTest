function solution(phone_number) {
    var answer = '';
    let change = phone_number.slice(0,-4).replace(/[0-9]/g,"*");
    let num = phone_number.slice(-4);
    answer = change+num;
    return answer;
}