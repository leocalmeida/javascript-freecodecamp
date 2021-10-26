function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let consCluster = "";

  if (vowels.includes(str[0])) {
    return str + "way";
  }

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      consCluster += str[i];
    } else {
      break;
    }
  }

  if (consCluster === str) {
    return consCluster + "ay";
  } else {
    let cuttedWord = str.slice(consCluster.length);

    return cuttedWord + consCluster + "ay";
  }
}

console.log(translatePigLatin("glove"));
