function sumFibs(num) {
  let fib = [1, 1];
  for (let i = 0; i <= num * 2; i++) {
    let nextNum = fib[fib.length - 2] + fib[fib.length - 1];
    fib.push(nextNum);
  }
  let fibSumResul = 0;
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] <= num && fib[i] % 2 != 0) {
      fibSumResul += fib[i];
    }
  }

  return fibSumResul;
}

console.log(sumFibs(1000));
