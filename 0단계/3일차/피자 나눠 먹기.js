const solution = (slice, n) => {
  let answer = 1;
  while (true) {
    if (Math.floor((slice * answer) / n) != 0) {
      return answer;
    }
    answer++;
  }
};

console.log(solution(7, 10));
