function solution(brown, yellow) {
    const total = brown + yellow;
    let width = 0, height = 0;
  
    for (let i = 3; i <= Math.sqrt(total); i++) { 
        if (total % i === 0) { 
            height = i; 
            width = total / i; 
            if ((width - 2) * (height - 2) === yellow) { 
                return [width, height]; 
            }
        }
    }
}