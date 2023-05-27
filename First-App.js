console.log("Hello World.....!")

// Example of the way of creating object in JS using hard coding the properties and value pairs 
// and a property can also be a method or function also like here is greet.
const student = {

    name: "King",

    age: 14,

    greet() {

        // console.log("Hi, I am " + this.name);
        console.log(`Hi, I am ${this.name}`);       //This is an e.g of templet litrals provided by the ES-6 js.

    }

}

console.log(student)

student.greet()