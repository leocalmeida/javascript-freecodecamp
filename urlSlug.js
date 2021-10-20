// Only change code below this line
function urlSlug(title) {
    var reg = /\.|,|-|\s+/

    var preTitle = title.toLowerCase().trim()

    var arrTitle = preTitle.split(reg)

    var finalTitle = arrTitle.join("-")


    return finalTitle
  
  }
  // Only change code above this line


  console.log(urlSlug(" Winter Is  Coming"))