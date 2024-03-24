// Function that takes a callback function as an argument and calls its
function receivesAFunction(callback) {
    callback(); // calls the call back functions
}
//  Function that returns a named function and takes no arguments
function returnsANamedFunction() {
    function namedFunction() { // Defines and returns named function
    }
    return namedFunction;
}
// Function that returns an anonymous function and takes no arguements
function returnsAnAnonymousFunction() {
    return function() {

    }; // returns call back function
}