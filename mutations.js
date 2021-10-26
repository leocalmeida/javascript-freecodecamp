function mutation(arr) {
  let control = true;
  let first = arr[0].toLowerCase();
  let sec = arr[1].toLowerCase();
  for (i in sec) {
    if (!first.includes(sec[i])) {
      control = false;
      return control;
    }
  }

  return control;
}

console.log(mutation(["hello", "hey"]));
