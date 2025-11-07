// OPEN THE CONSOLE IN THE BROWSER TO SEE THIS CODE IN ACTION 💥

const fruits = ["apple", "orange", "pineapple"];

// just a function declared
const doSomethingWithTheFruit = (fruit) => {
  console.log("from inside doSomethingWithTheFruit:", fruit.toUpperCase());
}

// passing function doSomethingWithTheFruit as a callback to the forEach
fruits.forEach(doSomethingWithTheFruit)
console.log("--- End of classic for loop")

// example of declaring our own for each, which receives an array to iterate from,
// and receives the callback function like the only argument of the forEach
// This callback is itself called within the body of this function
const ourOwnForEach = (arr, ourCallback) => {
  for (let i=0; i<arr.length; i++) {
    const currentFruit = arr[i];
    console.log("from inside ourOwnForEach:", currentFruit)

    // doSomethingWithTheFruit is executing here!
    ourCallback(currentFruit)
  }
}

// remember! doSomethingWithTheFruit is a parameter of the function, it's passed as an object/variable, it's not executed at this point
ourOwnForEach(fruits, doSomethingWithTheFruit)
