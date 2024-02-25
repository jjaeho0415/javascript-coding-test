const solution = (n) => {
  let answer = 1;
  let slice = 7;
  while (true) {
    if (Math.floor((slice * answer) / n) != 0) {
      return answer;
    }
    answer++;
  }
};

console.log(solution(7));
