function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i in arr){
        console.log(arr[i])
        for (var j in arr[i]){
            product *= arr[i][j]
        }
    }
    // Only change code above this line
    console.log(product)
    return product
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);