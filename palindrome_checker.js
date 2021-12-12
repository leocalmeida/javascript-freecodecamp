function palindrome(str) {
  const innerStr = str.replace(/\W|_/g, '');
  console.log(innerStr);

  let revStr = '';
  for (let i = innerStr.length - 1; i >= 0; i -= 1) {
    revStr += innerStr[i];
  }
  if (innerStr.toLowerCase() === revStr.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(palindrome('A man, a plan, a canal. Panama'));
