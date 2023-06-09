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
// Important means it filter always returns a sub-set of actaul array.
// let remove the empty strings from above array.

console.log(array.filter((item)=> item!==" ")) // output is [ 'apple', 'oranges', 'mango', 'lemon' ].

const numbers = [1,2,3,4,5] // See this is the eg of reduce method of array.
// reduce take two arguments first one is a function that contains the logic for reduction of vlaues of array and the
// and second a value that will initilaize the first parameter of our call back fundtion here in our case it is the   
// accumulator and value is 0, we can get product of all elements if change + to * and 0 to 1 ok.

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
},0)
console.log(sum)

// let and const are the key words use to create block scope variables in 

let a=12 
a=123
console.log(a) // this shows that the value of let variable can only be updated with in it's block. 

// Here it is in global scope and output is 123.

//Now we will see callbacks in JS.

// setTimeout(() => {
//     console.log('Timer is Done!');     // these 3 line are e.g. of Async code beacuse it does't finsed immideately 
// }, 2000);

// and it would even be the Async code even if we make the delay 
// of 1 miliSecond(try to making super fast) instead of 2000 means it will not finsed immideately and would be Async.

console.log('Hello!')
console.log('Hi!')          //These two line of code are synchronous and will execute immedeately right away one by one.

// Now we will see the Hello! and Hi befor the Timer is Done    


// For understanding callbacks we will see the following code , Here we want to show "The Timer is Done!" just after the 
// 2 seconds one this come on the console then we want to print "Done" just after 1.5 seconds 
// (with a dely of 1.5 seconds from the time) so we se the execution flow is like that 
// line 76,then after 2s line 77,after that line 78 will invocked the fetchData function and execution flow will goto the 
// defination of fetchData function which expects the value of parameter callback here it is an anonamous function 
// which is only console log the input parameter defination body of fetchData make a dealy of 1.5 seconds by using
// settimeout and therefore we have called the callback in the body of settimeout's ananomous function.

// const fetchData = callback => {
//     setTimeout(() => {
//       callback('Done')
//     },1500)
// }

// setTimeout(() => {
//     console.log('The Timer is Done!')
//     fetchData(text => {
//         console.log(text)
//     })
// }, 2000);

// Doing above code uisng promises  

const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('Done')
        },1500)
    })
    return promise;
}

setTimeout(() => {
    console.log('The Timer is Done!')
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    })
}, 2000);