const solution = (num_list) => {
  let answer = [];
  num_list.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < 5; i++) {
    answer.push(num_list[i]);
  }
  return answer;
};

console.log(solution([12, 4, 15, 46, 38, 1, 14]));
