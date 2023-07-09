function solution(tickets) {
    let answer = [];

    const dfs = (start, tickets, path) => {
        const newPath = [...path, start];
        
        if(tickets.length === 0) {
            answer.push(newPath);
            return;
        }
        
        tickets.map((ticket, idx) => {
            if(ticket[0] === start) {
                const copiedTickets = [...tickets];
                copiedTickets.splice(idx, 1);
                
                dfs(ticket[1], copiedTickets, newPath);
            }
        });
    }

    dfs("ICN", tickets, []);

    answer.sort();
    
    return answer[0];
}