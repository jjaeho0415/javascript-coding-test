const solution = (n, k) => {
  let answer = 0;
  k = k - parseInt(n / 10);
  answer = 12000 * n + 2000 * k;
  return answer;
};

console.log(solution(10, 3));
