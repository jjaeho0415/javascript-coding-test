const solution = (num_list) => {
  let even = "";
  let odd = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += String(num_list[i]);
    } else {
      odd += String(num_list[i]);
    }
  }
  return Number(even) + Number(odd);
};

console.log(solution([3, 4, 5, 2, 1]));
