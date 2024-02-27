const solution = (num_list) => {
  let mul = 1;
  let sumMul = 0;
  for (let i = 0; i < num_list.length; i++) {
    mul *= num_list[i];
    sumMul += num_list[i];
  }
  sumMul **= 2;
  if (mul < sumMul) {
    return 1;
  }
  return 0;
};

console.log(solution([3, 4, 5, 2, 1]));
