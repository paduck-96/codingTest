const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

//  많은 삽입과 삭제가 이루어지기 때문에
//연결리스트로 구현

// list를  구성할 node 객체
//node가 하나씩 만들어질 때마다
//num에 값이 들어오고
//연결되는 next 와 prev
class node {
    constructor(num){
        this.num = num;
    this.next = null;
    this.prev=null;}
};

// linkedlist 클래스
class linkedList {
    constructor(){
        this.head = null;
    this.tail=null;
    this.length = 0;}

// linkedlist add
push(num) {
    // node 객체 생성
    const newNode = new node(num);
    // 리스트가 비어있을 경우
    if(!this.head){
        this.head = newNode;
    }else{
        // 새로운 노드를 현재 마지막 노드의 다음에 삽입
        //현재 마지막 노드를 새로운 노드 이전과 연결
        this.tail.next = newNode;
        newNode.prev = this.tail
    }
    this.tail = newNode;
    this.length++;
    
    return newNode;
}
// 처음 노드 가져오기
//하단 정리
getHead(){
    return this.head.num;
}

// 처음 노드 삭제
removeHead(){
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
}

// 길이 가져오기
getLength(){
    return this.length;
}
}

const deck = new linkedList();
let check = 1;
while(check<=input){
    deck.push(check);
    check++;
}
while(deck.getLength()!==1){
deck.removeHead();
deck.push(deck.getHead());
deck.removeHead();
}

console.log(deck.getHead());