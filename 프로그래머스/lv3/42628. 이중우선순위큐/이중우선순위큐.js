function solution(operations) {
    let heap = [];

    operations.forEach(operation => {
        let [op, num] = operation.split(' ');
        num = Number(num);

        if (op === 'I') {
            heap.push(num);
        } else if (op === 'D' && heap.length > 0) {
            heap.sort((a, b) => a - b);
            num === 1 ? heap.pop() : heap.shift(); 
        }
    });

    return heap.length === 0 ? [0, 0] : [Math.max(...heap), Math.min(...heap)];
}