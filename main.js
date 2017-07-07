// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y) {

  // Your answer here

  if (x > y) {
    return (x);
  } else {
    return (y);
  }
}
console.log(max(76,24) === 76)
console.log(max(76, 24))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c){
    // Your answer here
    if (a > b && c){
      return (a);
    }
    else if (b > a && c) {
      return (b);
    } else {
      return (c);
    }
}

console.log(maxOfThree(342,762,2) === 762)
console.log(maxOfThree(342,762,2))



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === "a" || "e" || "i" || "o" || "u") {
      return true;
    } else {
      return false;
    }
}

console.log(isVowel("b") === true)

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function add(a,b){
  return a+b;
}

console.log(add(4,2))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(a,b,c){
  return (a + b + c)/3;
}

console.log(avg(9,12,18))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(str){
  return (str.length);
}

console.log(getLength("Thank God it's Friday tomorrow"))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(a,b) {
  if (a<b){
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(23,6))
console.log(greaterThan(23,76))
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return "Hi, " + name + "!";
}

console.log(greet("Slim Shady"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1,word2,word3,word4){
  return "I " + word1 + " every " + word2 + " before " + word3 + " or " + word4;
}

console.log(madlib("shower", "morning", "eating", "leaving"))
