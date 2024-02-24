function solution(my_string) {
  let answer = "";
  let splitString = my_string.split("");
  let reverseString = splitString.reverse();
  answer = reverseString.join("");
  return answer;
}

console.log(solution("jaron"));
