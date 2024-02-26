const solution = (my_string) => {
  const splitString = my_string.split("");
  let answer = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (parseInt(splitString[i])) {
      answer += parseInt(splitString[i]);
    }
  }
  return answer;
};

console.log(solution("1a2b3c4d123"));
