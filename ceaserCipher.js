function rot13(str) {
  const alphabet = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  };
  // const innerStr = str.replace(/(\W)/g, '$1');
  const innerStr = str;
  let decrypted = '';
  for (let i = 0; i < innerStr.length; i += 1) {
    if (innerStr[i].match(/\w/)) {
      decrypted += alphabet[innerStr[i]];
    } else {
      decrypted += innerStr[i];
    }
  }
  return decrypted;
}

console.log(rot13('SERR CVMMN!'));
