//Example of How to use for of loop a method of array object in JS. 

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

// Example of using map method of array object in JS.
//  It actually always return a new modified version array on which it is applied.
console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

//Task to make to return new modified array returning new array which is show empty string on the places of " " in array.
var array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']
console.log(array)
console.log(array.map((a) => {
    if (a == " ") {
        return "empty string"
    }
    else {
        return a
    }
}))

// Task to show how to user the filter method of arrays in JS.
// similarly like map filter also returns a new array just by filtering the elements as per the condition provided by us.
// let remove the empty strings from above array.

console.log(array.filter((item)=> item!==" ")) // output is [ 'apple', 'oranges', 'mango', 'lemon' ].

// let and const are the key words use to create block scope variables in 

let a=12 
a=123
console.log(a) // this shows that the value of let variable can only be updated with in it's block. 

// Here it is in global scope and output is 123.
