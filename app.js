"use strict";
// we don't know what the user will input
let userInput;
let userName;
// neither of these will throw an error, so up this point the 'unknown' type is indistinguishable from the 'any' type.
userInput = 5;
userInput = 'Max';
// this will cause an error because
//  - userName must be a string and userInput is not guranteed to be a string
//      - if userName was 'any' this error would not happen
if (typeof userInput === 'string') {
    userName = userInput;
}
// this will never return anything
// function generateError(message: string, code: number): never{
//     throw { message: message, errorCode: code};
// }
// // if we tried this we 
// const result = generateError('An error occurred!', 500);
// // this will crash everything
// console.log(result);
