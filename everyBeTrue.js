function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    } else if (
      collection[i].hasOwnProperty(pre) &&
      Boolean(!collection[i][pre])
    ) {
      return false;
    }
  }
  return true;
}

// console.log(Boolean(NaN));

console.log(truthCheck([{ single: "double" }], "single"));
