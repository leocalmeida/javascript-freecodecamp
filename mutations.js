function mutation(arr) {
  let control = true;
  const first = arr[0].toLowerCase();
  const sec = arr[1].toLowerCase();
  for (i in sec) {
    if (!first.includes(sec[i])) {
      control = false;
      return control;
    }
  }

  return control;
}

console.log(mutation(["hello", "hey"]));
