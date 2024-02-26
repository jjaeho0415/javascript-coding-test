const solution = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  return array[Math.floor(array.length / 2)];
};

console.log(solution([1, 2, 7, 10, 11]));
