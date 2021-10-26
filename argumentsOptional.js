function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") {
    return undefined;
  }
  if (second === undefined) {
    return (newSecond) => addTogether(first, newSecond);
  }
  if (typeof second !== "number") {
    return undefined;
  }
  return first + second;
}

console.log(addTogether(5)(7));
