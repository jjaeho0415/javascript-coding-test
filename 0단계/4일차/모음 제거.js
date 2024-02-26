const solution = (my_string) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let isVowel = false;
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (my_string[i] === vowel[j]) {
        isVowel = true;
      }
    }
    if (!isVowel) {
      answer += my_string[i];
    }
    isVowel = false;
  }
  return answer;
};

console.log(solution("bus"));
