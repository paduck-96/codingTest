function solution(n, lost, reserve) {
    const arr = Array.from({length:n}).fill(1);

    lost.map((lost) => {arr[lost-1] = 0});
    reserve.map(reserve => {arr[reserve-1] += 1});

    // 가운데 학생 기준, 앞 뒤 체크
    for(let i=0; i<n; i++){
        if(arr[i] === 0 && arr[i-1] ===2){
            arr[i] = 1;
            arr[i-1] = 1;
        }
        else if(arr[i] === 0 && arr[i+1] === 2){
            arr[i] = 1;
            arr[i+1]=1;
        }
    }
    return arr.filter(el => el> 0).length;
}