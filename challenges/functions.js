// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consumeAdd(x, y, cb) {
  return cb(x + y);
}

function consumeMultiply(x, y, cb) {
  return cb(x * y);
}

function consumeGreeting(x, y, cb) {
  return cb("Hello " + `${x}` + " " + `${y}` + ", nice to meet you!");
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

consumeAdd(2, 2, function(add) {
  console.log(add);
});

consumeMultiply(10, 16, function(multiply) {
  console.log(multiply);
});

consumeGreeting("Mary", "Poppins", function(greeting) {
  console.log(greeting);
});

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2, 2, add); // 4
// consume(10, 16, multiply); // 160
// consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

consumeAdd(2, 2, function(add) {
  console.log(add);
});

consumeMultiply(10, 16, function(multiply) {
  console.log(multiply);
});

consumeGreeting("Mary", "Poppins", function(greeting) {
  console.log(greeting);
});

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: It can access internal because in closures, an inner function has access to the outer function’s variables

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
