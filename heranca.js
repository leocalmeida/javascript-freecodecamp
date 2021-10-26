function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Cat(name) {
  Animal.call(this);
  this.name = name;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.eat = function () {
  console.log("miau!");
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = Object.create(Animal.prototype);

var kate = new Cat("kate");
kate.eat();
// kate.prototype.eat();
