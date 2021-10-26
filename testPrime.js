const isPrime = (num) => {
  let contador = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    return true;
  } else {
    return false;
  }
};

console.log(isPrime(2));
