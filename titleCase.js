function titleCase(str) {
    var words = str.split(' ');
    let titleWords =''
    for (let i = 0; i<words.length; i++){
        console.log(words[i])
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    words.forEach(word => {
        titleWords+=' '+word
    });
    return titleWords.trim();
  }
  
  console.log(titleCase("sHoRt AnD sToUt"));