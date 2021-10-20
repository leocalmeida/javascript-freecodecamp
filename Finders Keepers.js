function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
console.log(
  findElement([1, 3, 5, 7, 9, 11], function (num) {
    return num % 2 === 0;
  })
);
