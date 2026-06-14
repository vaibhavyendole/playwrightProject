//Inheritance
//Inheritance is a mechanism where a child class acquires all properties and methods of a parent class

//Parent Class
class Parent {

    constructor() {
        //Property of Parent Class
        this.parentProp = "I am from Parent";
        console.log(this.parentProp);
    }

    //Parent Method
    parentMethod() {
        console.log("Parent method called");
    }
}

//Child Class
//extends keyword is used to inherit Parent class
class Child extends Parent {

    constructor() {
        //super() calls Parent class constructor
        //Mandatory before using 'this' inside child constructor
        super();

        //Child Property
        this.childProp = "I am from Child";
        console.log(this.childProp);
    }

    //Child Method
    childMethod() {
        console.log("Child method called");
    }
}

//Creating Object of Child Class
const child = new Child();

//Calling Child Method
child.childMethod();

//Calling Parent Method
//Inherited from Parent class
child.parentMethod();

//Real-Time Understanding
/*
Parent
   |
 Child
*/

//Important Points

//Inheritance is achieved using extends keyword

//Child class acquires properties and methods from parent class

//super() is used to call parent constructor

//super() is mandatory before using this inside child constructor

//Inheritance promotes code reusability

//Avoids code duplication

//Child class can:
//1. Use parent methods
//2. Add new methods
//3. Override parent methods

//Interview Questions

//Q. What is Inheritance?
//Inheritance is an OOP concept where a child class acquires properties and methods of a parent class.

//Q. Why is super() required?
//super() calls the parent class constructor.

//Q. What happens if super() is not called?
//Error: Must call super constructor in derived class before accessing 'this'

//Q. Advantages of Inheritance
//Code Reusability
//Maintainability
//Reduced Duplication
//Method Overriding Support