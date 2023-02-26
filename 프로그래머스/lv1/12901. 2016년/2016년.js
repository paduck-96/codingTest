function solution(a, b) {
    const M = a;
    const D = b;
    const date = new Date(`2016-${M}-${D}`)
    return date.toString().split(" ")[0].toUpperCase()
}