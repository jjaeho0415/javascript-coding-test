function solution(num_list) {
  let answer = [];
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? even++ : odd++;
  }
  answer.push(even, odd);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
