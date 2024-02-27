/**
 *
 * @param {*} n 자연수 n
 * @returns 두 숫자의 곱이 n인 자연수 순서쌍의 개수 = n의 약수의 개수
 */
const solution = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
};

console.log(solution(20));
