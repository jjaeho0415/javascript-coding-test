/*
    나이는 태어난 연도에 1살이며 1년마다 1씩 증가
*/
function solution(age) {
  let answer = 2022 - age + 1;
  return answer;
}

console.log(solution(40));
console.log(solution(23));
