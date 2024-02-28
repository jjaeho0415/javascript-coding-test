const solution = (numbers, n) => {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      return answer;
    }
  }
};

console.log(solution([58, 44, 27, 10, 100], 139));
