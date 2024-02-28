const solution = (my_string, n) => {
  let answer = "";
  for (let i = my_string.length - n; i < my_string.length; i++) {
    answer += my_string[i];
  }
  return answer;
};

console.log(solution("He11OWOr1d", 5));
