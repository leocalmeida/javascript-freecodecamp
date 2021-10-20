function confirmEnding(str, target) {
    const myReg = new RegExp(target+'$')

    return myReg.test(str);
  }
  
  console.log(confirmEnding("Bastian", "n"))

