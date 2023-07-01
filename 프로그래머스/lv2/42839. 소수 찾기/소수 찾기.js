function solution(numbers) {
    let answer = 0;
    let nums = new Set();
    
    // 조합
    const permute = (array, str) => {
        if (str.length > 0) {
            nums.add(Number(str));
        }
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                let temp = array.slice(0);
                temp.splice(i, 1);
                permute(temp, str + array[i]);
            }
        }
    };
    
    permute(numbers.split(''), '');
    
    //소수
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    nums.forEach(num => { 
        if (isPrime(num)) { 
            answer++;
        }
    });
    
    return answer;
    
}