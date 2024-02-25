const solution = (money) => {
  let answer = [];
  let count = 0;
  const americano = 5500;
  while (true) {
    if (americano <= money) {
      money -= americano;
      count++;
    } else {
      break;
    }
  }
  answer.push(count, money);
  return answer;
};

console.log(solution(5500));
