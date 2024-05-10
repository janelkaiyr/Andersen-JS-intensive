/*Implement a tricky combination of async operations. It should be a set of consol.log. Use Promises, setTimeout and sync logs all together */



const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});
promise.then((res) => {
    console.log(res);
});
console.log(4);;


//2
console.log('start');

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer1 = setTimeout(() => {
        console.log('timer1')
    }, 0)
});

const timer2 = setTimeout(() => {
    console.log('timer2')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end');