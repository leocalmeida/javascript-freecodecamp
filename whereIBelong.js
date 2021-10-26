function getIndexToIns(arr, num) {
  let arrAux = [...arr];
  arrAux.push(num);
  arrAux.sort((a, b) => a - b);

  let indice = arrAux.indexOf(num);

  return indice;
}

console.log(getIndexToIns([40, 60], 50));
