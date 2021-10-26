function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const getPrimeFact = (num) => {
    const arrTest = [];
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        while (num % i === 0) {
          num /= i;
          arrTest(num);
        }
      }
    }
  };
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
}

console.log(smallestCommons([6, 4]));
