const solution = (num_list) => {
  let answer = num_list;
  let arrLength = num_list.length;
  if (num_list[arrLength - 1] > num_list[arrLength - 2]) {
    answer.push(num_list[arrLength - 1] - num_list[arrLength - 2]);
  } else {
    answer.push(num_list[arrLength - 1] * 2);
  }
  return answer;
};

console.log(solution([2, 1, 6]));
