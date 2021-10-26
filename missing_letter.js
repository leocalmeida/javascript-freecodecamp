function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  var inicio = alpha.indexOf(str[0]);
  var fim = alpha.indexOf(str[str.length - 1]);
  for (let i = inicio; i < fim; i++) {
    if (!str.includes(alpha[i])) {
      return alpha[i];
    }
  }
  return;
}

console.log(fearNotLetter("abcdefghjklmno"));
