function greet(name, time) {
  console.log("Good " + time + ", " + name + "!");
}

greet("Alice", "morning"); // Good morning, Alice!
greet("Bob", "evening"); // Good evening, Bob!

function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // Outputs: 8

function noReturn() {
  console.log("This function doesn't return anything");
}

let resultt = noReturn();
console.log(resultt); // Outputs: undefined

let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar); // I'm global
  console.log(localVar); // I'm local
}

scopeExample();
console.log(globalVar); // I'm global
// console.log(localVar); // Throws an error: localVar is not defined

// Function Expression

let greeting = function (name) {
  console.log("Hello, " + name);
};

greeting("Alice"); // Outputs: Hello, Alice

// Arrow Function
let greeting1 = (name) => {
  console.log("Hello, " + name);
};

greeting1("Bob"); // Outputs: Hello, Bob
