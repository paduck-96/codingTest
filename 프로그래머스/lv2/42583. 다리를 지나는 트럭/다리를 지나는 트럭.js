function solution(bridge_length, weight, truck_weights) {
    let queue = Array(bridge_length).fill(0);
    let curWeight = 0;
    let time = 0;
    
    while(truck_weights.length > 0){
        time++;
        curWeight -= queue.shift();
        if(curWeight + truck_weights[0] <= weight){
            let truck = truck_weights.shift();
            queue.push(truck);
            curWeight += truck;
        }else{
            queue.push(0);
        }
    }
    return time+bridge_length;
}