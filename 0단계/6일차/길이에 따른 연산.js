const solution = (num_list) => {
  let answer;
  if (num_list.length >= 11) {
    answer = 0;
    for (let i = 0; i < num_list.length; i++) {
      answer += num_list[i];
    }
  } else {
    answer = 1;
    for (let i = 0; i < num_list.length; i++) {
      answer *= num_list[i];
    }
  }
  return answer;
};

console.log(solution([2, 3, 4, 5]));
