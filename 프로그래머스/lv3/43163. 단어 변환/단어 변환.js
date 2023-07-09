function solution(begin, target, words) {
    const canChange = (current, next) => {
        let count = 0; 
        for (let i = 0; i < current.length; i++) {
            if (current[i] !== next[i]) count++; 
            if (count > 1) return false; 
        }
        return true; 
    }
    
    if (!words.includes(target)) return 0;
    
    const visited = [];
    const queue = [[begin, 0]];
    
    while (queue.length > 0) {
        const [current, level] = queue.shift();
        
        if (current === target) return level; 
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && canChange(current, words[i])) { 
                visited[i] = true; 
                queue.push([words[i], level + 1]); 
            }
        }
    }
}