function solution(jobs) {
    let answer = 0, now = 0, i = 0;
    jobs.sort((a, b) => a[0] - b[0]);
    
    let priorityQueue = [];
    
    while(i < jobs.length || priorityQueue.length !== 0) {
        while(i < jobs.length && jobs[i][0] <= now) {
            priorityQueue.push(jobs[i++]);
            priorityQueue.sort((a, b) => a[1] - b[1]);   
        }
        
        if(priorityQueue.length === 0) {
            now = jobs[i][0];
        } else {
            let [start, time] = priorityQueue.shift();
            answer += (now - start + time);
            now += time;
        }
    }

    return Math.floor(answer / jobs.length);
}