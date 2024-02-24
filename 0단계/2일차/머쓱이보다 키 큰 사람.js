function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer += array[i] > height ? 1 : 0;
  }
  return answer;
}

console.log(solution([149, 180, 192, 170], 167));
