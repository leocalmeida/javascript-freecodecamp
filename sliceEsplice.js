function frankenSplice(arr1, arr2, n) {
    let arr2Ini = arr2.slice(0,n)
    let arr2Fim = arr2.slice(n)

    let aux = [...arr2Ini,...arr1,...arr2Fim]

    return aux;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))