function solution(message) {
  let answer = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i]) {
      answer += 1;
    }
  }
  answer *= 2;
  return answer;
}
