const solution = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      arr1Sum += arr1[i];
      arr2Sum += arr2[i];
    }
    if (arr1Sum > arr2Sum) {
      return 1;
    } else if (arr1Sum < arr2Sum) {
      return -1;
    } else {
      return 0;
    }
  }
};

console.log(solution([49, 13], [70, 11, 2]));
