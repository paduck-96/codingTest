function solution(genres, plays) {
    var answer = [];
    let playlist = {};
    let songlist = [];
    // 총합 구하기
    // 장르+노래+고유번호
    genres.forEach((e,i)=>{
        playlist[e]?playlist[e]+=plays[i]:playlist[e]=plays[i];
        songlist.push([genres[i], plays[i], i]);
    })
    // 총합 정렬
    const SORTLIST = Object.entries(playlist).sort((a,b)=>b[1]-a[1]);
    // 노래 정보 정렬
    songlist.sort((a,b)=>{
            if(a[1]===b[1]) return a[2]-b[2];
            else return b[1]-a[1];
    })
    //
    SORTLIST.forEach(([GENRE, PLAY])=>{
        let songs = songlist.filter(song => song[0] === GENRE);
        answer.push(songs[0][2]);
        if(songs[1]) answer.push(songs[1][2])
    })
    return answer;
}