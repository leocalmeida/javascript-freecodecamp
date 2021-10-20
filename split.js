function splitify(str) {
    // Only change code below this line
    var reg = /\s|\.|-|,/
    var words = str.split(reg)
    return words
  
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));
  