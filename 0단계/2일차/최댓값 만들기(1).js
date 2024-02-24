function solution(numbers) {
  let answer = 0;
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      max = numbers[i] * numbers[j];
      if (max > answer) {
        answer = max;
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
