/*Create a Calculator class. The constructor accepts two numbers, if at least one is not valid, it throws an error. We do not consider Infinity and other special values of the number type to be valid numbers. Methods:
setX() - sets the first number
setY() - sets the second number

logSum() - returns the sum of the given numbers
logMul() - returns the product of the given numbers
logSub() - returns the difference of the given numbers
logDiv() - returns the quotient of the given numbers, throws an error when dividing by 0.

All methods of the second group should work correctly even if they are placed in a separate variable

const logSumRef = calculator.logSum;
console.log(logSumRef()); // still works */

class Calculator {
     constructor(first, second) {
        if (!this.isValidNumber(first) || !this.isValidNumber(second)) {
            throw new Error('Enter valid number');
        }

        this.first = first;
        this.second = second;

        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }
    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num);
    }

    setX(first) {
        if (this.isValidNumber(first)) {
            this.first = first;
        }
        else throw new Error("Enter valid number");
    }
    setY(second) {
        if (this.isValidNumber(second)) {
            this.second = second;
        }
        else throw new Error("Enter valid number");
    }
    logSum() {
        return this.second + this.first;
    }
    logMul() {
        return this.first * this.second;
    }
    logSub() {
        return this.first - this.second;
    }
    logDiv() {
        if (this.second === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return this.first / this.second;
    }
}
let calc = new Calculator(5, 10)
calc.setX(5);
calc.setY(4);
console.log(calc.logDiv())
const logSumRef = calc.logSum;
console.log(logSumRef());
