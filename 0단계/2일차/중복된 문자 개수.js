function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
