function solution(s) {
    const arr = s.split(' ');
    const answer = [];
    let word = '';
  
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
          	if( j % 2 === 0) {
                word += arr[i][j].toUpperCase();
            } else {
                word += arr[i][j].toLowerCase();
            }     
        }
      answer.push(word);
      word = '';
    }
  
  return answer.join(' ');
}