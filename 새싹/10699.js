const startTime = new Date().getTime();
const startMemory = process.memoryUsage().rss;
//변경 시작

const date = new Date();
console.log(
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
);

//변경 끝
const endTime = new Date().getTime();
const endMemory = process.memoryUsage().rss;
console.log(`걸린 시간 : ${endTime - startTime}ms`);
console.log(`사용 메모리 : ${endMemory - startMemory}`);
