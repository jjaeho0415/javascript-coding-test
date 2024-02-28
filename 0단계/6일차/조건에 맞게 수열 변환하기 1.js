const solution = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      answer.push(Math.floor(arr[i] / 2));
    } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
      answer.push(Math.floor(arr[i] * 2));
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution([1, 2, 3, 100, 99, 98]));
