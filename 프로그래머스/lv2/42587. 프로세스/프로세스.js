function solution(priorities, location) {
    var answer = 0;
    let queue = priorities.map((priority, index) => {
        return {
            index: index, 
            priority: priority 
        };
    });
    
    let count = 0;
    while (true) { 
        let current = queue.shift();

        if (queue.some(document => document.priority > current.priority)) {
            queue.push(current);
        } else {
            count++;

            if (current.index === location) {
                return count;
            }
        }
    }
    return answer;
}