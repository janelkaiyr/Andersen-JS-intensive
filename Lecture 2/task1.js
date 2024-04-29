const myIterable = {
    from: null,
    to: null,
    [Symbol.iterator]: function () {
        let current = this.from;
        const to = this.to;

        if (typeof current !== 'number' || typeof to !== 'number') {
            throw new Error("from and to properties must be numbers");
        }

        if (to < current) {
            throw new Error("to property must be greater than or equal to from property");
        }

        return {
            next: () => {
                if (current <= to) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Example usage:
myIterable.from = 1;
myIterable.to = 4;

for (let item of myIterable) {
    console.log(item); // 1, 2, 3, 4
}


