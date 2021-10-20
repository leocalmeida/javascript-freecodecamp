function findLongestWordLength(str) {
    let arr = str.split(' ')
    var result=''
    arr.forEach(element => {
        if(result.length < element.length){
            result = element
        }
    });
    return result.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))