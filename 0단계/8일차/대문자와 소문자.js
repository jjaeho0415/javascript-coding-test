// const solution = (my_string) => {
//   let answer = "";
//   for (let i = 0; i < my_string.length; i++) {
//     if (my_string[i] === my_string[i].toUpperCase()) {
//       answer += my_string[i].toLowerCase();
//     } else {
//       answer += my_string[i].toUpperCase();
//     }
//   }
//   return answer;
// };

const solution = (my_string) => {
  return [...my_string]
    .map((str) =>
      str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase()
    )
    .join("");
};

console.log(solution("cccCCC"));
