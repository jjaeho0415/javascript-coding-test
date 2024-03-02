// const solution = (hp) => {
//   let zangoon = 5;
//   let byeongjeong = 3;
//   let count = 0;
//   count += Math.floor(hp / zangoon);
//   hp %= zangoon;
//   count += Math.floor(hp / byeongjeong);
//   hp %= byeongjeong;
//   count += hp;
//   return count;
// };

const solution = (hp) => {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
};

console.log(solution(23));
