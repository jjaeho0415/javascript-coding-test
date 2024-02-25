const solution = (my_string, letter) => {
  let answer = [];
  let splitString = my_string.split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== letter) {
      answer.push(splitString[i]);
    }
  }
  return answer.join("");
};

console.log(solution("abcdef", "f"));
