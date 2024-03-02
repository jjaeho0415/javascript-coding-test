const solution = (num_list) => {
  let answer = -1;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      break;
    }
  }
  return answer;
};

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
