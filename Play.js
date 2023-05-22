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