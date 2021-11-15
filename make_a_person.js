var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  this.getFirstName = function () {
    const [first, last] = fullName.split(" ");
    return first;
  };
  this.getLastName = function () {
    const [first, last] = fullName.split(" ");
    return last;
  };
  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (firstName) {
    const [first, last] = fullName.split(" ");
    fullName = firstName + " " + last;
  };
  this.setLastName = function (lastName) {
    const [first, last] = fullName.split(" ");
    fullName = first + " " + lastName;
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
};

var bob = new Person("Bob Ross");
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());
