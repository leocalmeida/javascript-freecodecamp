function dropElements(arr, func) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      delete arr[i];
    } else if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return result;
}

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   })
// );
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
