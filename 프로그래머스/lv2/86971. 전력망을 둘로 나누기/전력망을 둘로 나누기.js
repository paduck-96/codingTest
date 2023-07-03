function solution(n, wires) {
    const graph = Array.from(Array(n+1), ()=>[]);
    wires.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })
    
    let answer = n;
    const visited = Array(n+1).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        let cnt = 1;
        
        for(let i =0; i<graph[node].length;i++){
            const next = graph[node][i];
            if(visited[next])continue;
            cnt += dfs(next);
        }
        
        answer = Math.min(answer, Math.abs(n-2*cnt));
        
        return cnt;
    }
    
    dfs(1);
    
    return answer;
}