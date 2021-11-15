function orbitalPeriod(arr) {
  for (let i = 0; i < arr.length; i++) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const twoPi = 2 * Math.PI;
    let T = Math.pow(earthRadius + arr[i].avgAlt, 3);
    T = T / GM;
    T = Math.sqrt(T);
    T = 2 * Math.PI * T;
    T = Math.round(T, 0);

    delete arr[i].avgAlt;

    arr[i].orbitalPeriod = T;
  }
  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
