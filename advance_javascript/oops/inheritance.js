class A{
    a(){
        console.log("I am from class A");
    }
}

class B extends A{
    b(){
        console.log("I am from class B");
    }
}

const obj = new B()
obj.a()
obj.b()


// Ways to Achieve "Multiple Inheritance" in JS

const CanEat = {
  eat() {
    console.log("Eating...");
  }
};

const CanWalk = {
  walk() {
    console.log("Walking...");
  }
};

class Person {}
Object.assign(Person.prototype, CanEat, CanWalk);

const user = new Person();
user.eat();  // Eating...
user.walk(); // Walking...
