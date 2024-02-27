const solution = (arr, k) => {
  let answer = [];
  if (k % 2 !== 0) {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i] * k);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i] + k);
    }
  }
  return answer;
};

console.log(solution([1, 2, 3, 100, 99, 98], 3));
