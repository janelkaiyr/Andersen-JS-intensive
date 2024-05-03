/*Write your own implementation of the built-in array function filter. 
Call the function myFilter and make it so that any array can use this function as a “native” one. 
It must take a callback function as parameters and an optional parameter as an object that will be used as this in internal calls to this callback function.
Ultimately, your myFilter implementation should work exactly like the built-in filter method.
The callback function passed as a parameter must also be called with the same parameters as the original (element, index, array). */


// Define the myFilter method on the Array prototype
Array.prototype.myFilter = function (callback, thisArg) {

    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};
