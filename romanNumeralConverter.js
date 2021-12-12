function convertToRoman(num) {
  // 1 = I
  // 4 = IV
  // 5 = V
  // 9 = IX
  // 10 = X
  // 40 = XL
  // 50 = L
  // 90 = XC
  // 100 = C
  // 400 = CD
  // 500 = D
  // 900 = CM
  // 1000 = M
  let count = num;
  let romano = '';
  while (count !== 0) {
    if (count >= 1000) {
      romano += 'M';
      count -= 1000;
    } else if (count >= 900 && count < 1000) {
      romano += 'CM';
      count -= 900;
    } else if (count >= 500 && count < 900) {
      romano += 'D';
      count -= 500;
    } else if (count >= 400 && count < 500) {
      romano += 'CD';
      count -= 400;
    } else if (count >= 100 && count < 400) {
      romano += 'C';
      count -= 100;
    } else if (count >= 90 && count < 100) {
      romano += 'XC';
      count -= 90;
    } else if (count >= 50 && count < 90) {
      romano += 'L';
      count -= 50;
    } else if (count >= 40 && count < 50) {
      romano += 'XL';
      count -= 40;
    } else if (count >= 10 && count < 40) {
      romano += 'X';
      count -= 10;
    } else if (count === 9) {
      romano += 'IX';
      count -= 9;
    } else if (count >= 5 && count < 9) {
      romano += 'V';
      count -= 5;
    } else if (count === 4) {
      romano += 'IV';
      count -= 4;
    } else if (count < 4) {
      romano += 'I';
      count -= 1;
    }
  }
  return romano;
}

console.log(convertToRoman(16));
