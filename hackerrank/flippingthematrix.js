function flippingMatrix(matrix) {
    // Write your code here
    /**
     * 2차원 배열을 뒤집는 과정에서 묶이는 쌍을 생각해야 함
     * 일단, 항상 행과 열은 짝수여야 하기 때문에 쌍을 구하기 위해 2로 나누고
     * 자리를 바꿀 수 있는 값(반복 당 4개-끝값)을 묶어서
     * 전체 반복횟수에서 최대값을 구해 누적
     */
let n = matrix.length/2;
let max = 0;
let total = 0;
for(let row = 0; row<n;row++){
    for(let col=0;col<n;col++){
        max=Number.MIN_VALUE;
        max=Math.max(matrix[row][col],max)
        max=Math.max(matrix[row][2*n-col-1],max)
        max=Math.max(matrix[2*n-row-1][col],max)
        max=Math.max(matrix[2*n-row-1][2*n-col-1],max)
        total+=max;
    }
}
return total;
}