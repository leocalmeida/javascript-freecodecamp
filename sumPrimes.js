function sumPrimes(num) {
  let primes = [];

  for (let i = 1; i <= num; i++) {
    let controle = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        controle++;
      }
    }
    if (controle <= 2) {
      primes.push(i);
    }
  }
  let result = primes.reduce((x, y) => x + y);

  //no resultado do freecodecamp, não é levado em consideração o numero 1.
  return result - 1;
}

console.log(sumPrimes(977));
