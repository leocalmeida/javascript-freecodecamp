function telephoneCheck(str) {
  const reg =
    /(^1{0,1}\d{10}$)|(^1{0,1}\d{3}-\d{3}-\d{4}$)|(^1{0,1}\(\d{3}\)\d{3}-{0,1}\d{4}$)/;
  const innerStr = str.replaceAll(/\s/g, '');
  console.log(innerStr);
  if (innerStr.match(reg)) {
    return true;
  }
  return false;
}

console.log(telephoneCheck('27576227382'));
