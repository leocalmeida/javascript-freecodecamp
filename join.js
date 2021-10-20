function sentensify(str) {
    // Only change code below this line
    var reg = /\.|-|,/
    var arrStr = str.split(reg)
    var joinStr = arrStr.join(" ")
    return joinStr
  
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));