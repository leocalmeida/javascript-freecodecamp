function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcKeys = Object.keys(source);

  return collection.filter((item) => {
    return srcKeys.every((key) => {
      return item.hasOwnProperty(key) && item[key] == source[key];
    });
  });
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
