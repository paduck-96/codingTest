function solution(numbers, hand) {
    var answer = '';
    const NUMBERS = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    let LEFT = [3,0];
    let RIGHT = [3,2];
    
    function clickByLeft(n) {
        LEFT[0] = NUMBERS[n][0]
        LEFT[1] = NUMBERS[n][1]
        return 'L'
    }

    function clickByRight(n) {
        RIGHT[0] = NUMBERS[n][0]
        RIGHT[1] = NUMBERS[n][1]
        return 'R'
    }

    const answerArr = numbers.map(n => {
        if (n == 1 || n == 4 || n == 7) return clickByLeft(n);
        else if (n == 3 || n == 6 || n == 9) return clickByRight(n);
        else {
            const diffL = Math.abs(NUMBERS[n][0] - LEFT[0]) + Math.abs(NUMBERS[n][1] - LEFT[1])
            const diffR = Math.abs(NUMBERS[n][0] - RIGHT[0]) + Math.abs(NUMBERS[n][1] - RIGHT[1])

            if (diffL < diffR) return clickByLeft(n)
            else if (diffL > diffR) return clickByRight(n)
            else {
                if (hand == 'left') return clickByLeft(n)
                else return clickByRight(n)
            }
        }
    })
    
    answer = answerArr.join("");
    return answer;
}