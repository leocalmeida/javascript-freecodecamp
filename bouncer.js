function bouncer(arr) {
    const falses = [false, null, 0, "", undefined, NaN]
    let newArr = arr.filter(element => falses.includes(element)?'':element);
    return newArr;
  }
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""]))
