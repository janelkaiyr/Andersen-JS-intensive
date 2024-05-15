/*Create a Stack class.
The Stack constructor must take the maximum number of elements in the stack as its only optional parameter. If the parameter is an invalid number, generate an error. If the parameter is not specified, set the maximum stack size to 10.

Implement public methods:
- push(elem) - add a new element to the stack (generate an error if the stack is full);
- pop() - remove the top element of the stack and return it (generate an error if the stack is empty);
- peek() - get the top element of the stack (return null if the stack is empty);
- isEmpty() - returns a Boolean value (whether the stack is empty or not);
- toArray() - returns a new array consisting of stack elements.

Implement static public methods:
- fromIterable(iterable) - returns a new Stack, the elements of which are the elements of the passed iterable entity. The maximum number of elements of such a stack must be equal to the length of this entity. If the entity is not iterable, generate an error.
 */

class Stack {
    constructor(maxSize = 10) {
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('Invalid maximum stack size.');
        }
        this.maxSize = maxSize;
        this.stack = [];
    }
    push(elem) {
        if (this.stack.length === this.maxSize) {
            throw new Error('stack is full');
        }
        this.stack.push(elem);
    }
    pop() {
        if (this.stack.length === 0) {
            throw new Error('stack is empty');
        }
        
        return this.stack.pop()
    }
    peek() {
        if (this.stack.length === 0) {
            throw new Error('Stack is empty.');
        }
        return this.stack[this.stack.length - 1];

    }
    isEmpty() {
        return this.stack.length === 0;

    }
    toArray() {
        return [...this.stack]

    }
    static fromIterable(iterable) {
        if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Input is not iterable.');
        }
        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;

    }

}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(255);
stack.push("dsfsd")
console.log(stack.toArray());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());

const iterable = [3, 4, 5];
const newStack = Stack.fromIterable(iterable);
console.log(newStack.toArray())
