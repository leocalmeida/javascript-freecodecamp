function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  let result = str.replace(before, after);
  return result;
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
