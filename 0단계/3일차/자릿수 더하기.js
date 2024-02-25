const solution = (n) => {
  let answer = 0;
  let splitNumberString = String(n).split("");
  for (let i = 0; i < splitNumberString.length; i++) {
    answer += parseInt(splitNumberString[i]);
  }
  return answer;
};

console.log(solution(1234));
