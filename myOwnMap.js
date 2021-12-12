// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  let newArray = [];
  // Only change code below this line

  callback(this.forEach((element) => newArray.push(element * 2)));
  // callback(newArray);
  // Only change code above this line
  return newArray;
};

let new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
