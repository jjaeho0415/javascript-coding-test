const solution = (sides) => {
  sides.sort();
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
};

console.log(solution([1, 2, 3]));
