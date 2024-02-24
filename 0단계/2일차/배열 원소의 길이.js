// function solution(strlist) {
//   let answer = [];
//   for (let i = 0; i < strlist.length; i++) {
//     answer.push(strlist[i].length);
//   }
//   return answer;
// }
const solution = (strlist) => strlist.map((x) => x.length);

console.log(solution(["We", "are", "the", "world!"]));
