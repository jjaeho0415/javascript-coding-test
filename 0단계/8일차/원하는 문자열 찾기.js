const solution = (myString, pat) => {
  lowerStr = myString.toLowerCase();
  lowerPat = pat.toLowerCase();
  return lowerStr.includes(lowerPat) ? 1 : 0;
};

console.log(solution("AbCdEfG", "aBc"));
