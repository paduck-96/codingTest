function solution(n, computers) {
    var answer = 0;
    
    let visited = Array(n).fill(false);
    
    function dfs(start, computers, visited){
        visited[start] = true;
        for(let i =0; i<computers.length;i++){
            if(!visited[i]&&computers[start][i] === 1){
                dfs(i, computers, visited);
            }
        }
    }
    
    for(let i =0; i<n; i++){
        if(!visited[i]){
            dfs(i, computers, visited);
            answer++;
        }
    }
    return answer;
}