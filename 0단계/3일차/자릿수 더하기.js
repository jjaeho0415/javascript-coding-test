const solution = (n) => {
  let answer = 0;
  let numberString = String(n);
  for (let i = 0; i < numberString.length; i++) {
    answer += parseInt(numberString[i]);
  }
  return answer;
};

console.log(solution(1234));
