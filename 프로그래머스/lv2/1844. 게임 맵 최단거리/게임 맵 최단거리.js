function solution(maps) {
    var answer = 0;
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    let dist = Array.from({length:n}, () => Array(m).fill(Infinity));
    //도착 여부
    let visited = Array.from({length: n}, () => Array(m).fill(false));

    
    const queue = [[0,0]];
    dist[0][0] = 1;
    visited[0][0] = true;
    
    while(queue.length){
        const [x,y] = queue.shift();
        
        for(let i =0; i<4;i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            
            if(nx<0 || nx>=n || ny<0 || ny>=m) continue;
            
            if(maps[nx][ny] === 0 )continue;
            
            if(dist[nx][ny] > dist[x][y] + 1){
                dist[nx][ny] = dist[x][y]+1;
                queue.push([nx,ny]);
            }
        }
    }
    
    return dist[n-1][m-1] === Infinity ? -1 : dist[n-1][m-1]
    
    return answer;
}