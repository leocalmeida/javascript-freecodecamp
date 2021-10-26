function destroyer(arr, ...items) {
  let newArr = arr.filter((arrItem) => !items.includes(arrItem));
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
