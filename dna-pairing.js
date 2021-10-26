function pairElement(str) {
  let paired = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A") {
      let cel = [];
      cel.push(str[i]);
      cel.push("T");
      paired.push(cel);
    } else if (str[i] == "T") {
      let cel = [];
      cel.push(str[i]);
      cel.push("A");
      paired.push(cel);
    } else if (str[i] == "C") {
      let cel = [];
      cel.push(str[i]);
      cel.push("G");
      paired.push(cel);
    } else if (str[i] == "G") {
      let cel = [];
      cel.push(str[i]);
      cel.push("C");
      paired.push(cel);
    }
  }

  return paired;
}

console.log(pairElement("GCG"));
