function steamrollArray(arr) {
  let stringArr = "";
  let result = arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      a = a.concat(steamrollArray(b));
    } else {
      a.push(b);
    }
    return a;
  }, []);

  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
