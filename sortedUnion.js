function uniteUnique(...arr) {
  let generalArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!generalArr.includes(arr[i][j])) {
        generalArr.push(arr[i][j]);
      }
    }
  }
  return generalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
