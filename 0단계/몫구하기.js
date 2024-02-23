/*
    몫은 parseInt() 또는 Math.floor()를 사용하여 표현
*/
function solution(num1, num2) {
  let answer = parseInt(num1 / num2);
  return answer;
}

console.log(solution(10, 5));
console.log(solution(7, 2));
