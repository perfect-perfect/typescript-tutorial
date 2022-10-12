function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        // because 'phrase is a string, this will convert the other variables to strings as well and introduce that old bug
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
    
}

const number1 = 5;
const number2 = 2.8;
const printResult1 = true;
const resultPhrase = 'Result is: ';

const result = add1(number1, number2, printResult1, resultPhrase);
console.log(result);