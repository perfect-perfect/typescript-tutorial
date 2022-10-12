"use strict";
// if we hover over add we can see the infered type of return
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// remember 'cb' is just the name of the paramter. The actual function we send in could be any function that meets this criteria
//  - which is that 
//      - the function recieves a number as an arguement, which is the paramater 'num'
//      - and returns nothing 'void' 
// the function we actually send in is an anonymous function that takes 'result' and prints it to the console
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// This says combinedValue must be a function that takes two parameters, where each argument is a number and the return is a number
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// the type used in the cb in 'addAndHandle' will make sure that the anonymous functions follows our rules
addAndHandle(10, 20, (result) => {
    console.log(result);
});
