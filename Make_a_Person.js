var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  const [first, last] = firstAndLast.split(" ");
  firstName: "",
  set firstName(first) {
    this.firstName = first
  }

  this.getFullName = function () {
    return "";
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
