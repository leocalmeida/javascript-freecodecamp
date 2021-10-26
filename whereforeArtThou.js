function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);

  return collection.filter((item) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (
        !item.hasOwnProperty(srcKeys[i]) ||
        item[srcKeys[i]] != source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
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
