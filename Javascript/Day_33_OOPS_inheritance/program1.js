// JavaScript inheritance examples and explanations

// 1. Prototype-based inheritance with constructor functions
// In JavaScript, objects inherit from other objects via the prototype chain.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function() {
  return `${this.name} is ${this.age} years old.`;
};

function Student(name, age, course) {
  Person.call(this, name, age); // inherit properties from Person
  this.course = course;
}

// Set up prototype inheritance from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return `${this.name} studies ${this.course}.`;
};

const student1 = new Student('Alice', 22, 'Mathematics');
console.log(student1.describe()); // Alice is 22 years old.
console.log(student1.study());    // Alice studies Mathematics.

// 2. Inheritance using Object.create
// This creates a new object that directly inherits from another object.
const animal = {
  eats: true,
  walk() {
    return 'Animal walks';
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);      // true (inherited)
console.log(rabbit.walk());    // Animal walks (inherited method)
console.log(rabbit.jumps);     // true

// 3. ES6 class inheritance (syntactic sugar over prototypes)
// This is the modern, clearer syntax for single-level inheritance.
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    return `${this.brand} engine started.`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }

  info() {
    return `${this.brand} ${this.model}`;
  }
}

const car1 = new Car('Toyota', 'Corolla');
console.log(car1.start()); // Toyota engine started.
console.log(car1.info());  // Toyota Corolla

// 4. Multilevel inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }

  breathe() {
    return `${this.name} breathes.`;
  }
}

class Mammal extends Animal {
  constructor(name, hasFur) {
    super(name);
    this.hasFur = hasFur;
  }

  warmBlooded() {
    return `${this.name} is warm blooded.`;
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name, true);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks.`;
  }
}

const dog1 = new Dog('Buddy', 'Beagle');
console.log(dog1.breathe());      // Buddy breathes.
console.log(dog1.warmBlooded()); // Buddy is warm blooded.
console.log(dog1.bark());        // Buddy barks.

// 5. Hierarchical inheritance example
class Shape {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const circle1 = new Circle('red', 5);
const square1 = new Square('blue', 4);
console.log(circle1.color, circle1.area());
console.log(square1.color, square1.area());

// Summary of inheritance types shown here:
// - Prototype-based inheritance: objects inherit from other objects via prototype chains.
// - Constructor function inheritance: properties are inherited by calling a parent constructor and linking prototypes.
// - Object.create inheritance: directly create an object that inherits from another object.
// - ES6 class inheritance: modern syntax for prototype inheritance with extends and super.
