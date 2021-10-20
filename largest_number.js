function largestOfFour(arr) {
  var numbers = []; 
    var aux;
//   for (let i = 0; i < arr.length; i++) {
//     numbers.push(Math.max(...arr[i]))
//   }
for (let i = 0; i < arr.length; i++){
    aux = arr[i][0]
    for (let j = 1; j < arr[i].length; j++){
        
        if(aux < arr[i][j]){
            aux = arr[i][j]
        }
    }
    numbers.push(aux)
}

  return numbers;

}

console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]))

