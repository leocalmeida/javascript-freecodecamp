const getPrimeFact = (num) => {
  // const arrTest = [];
  const factors = {};
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      while (num % i === 0) {
        factors[i] = factors[i] ? factors[i] + 1 : 1;
        num /= i;
      }
    }
  }
  return factors;
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

function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFact(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j];
      }
    }
  }
  // console.log(primeFactors);
  // Build SCM from factorization
  //Ele utiliza tanto a chave quanto o valor para obter o resultado
  let multiple = 1;
  for (let i in primeFactors) {
    // console.log("i: ", i);
    // console.log("primeFactors: ", primeFactors[i]);
    // console.log("Multiplicacao dupla: ", i ** primeFactors[i]);
    multiple *= i ** primeFactors[i];
  }
  return multiple;
}

console.log(smallestCommons([1, 5]));
