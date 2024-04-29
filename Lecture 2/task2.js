function createObjects(name, age) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    function PersonWithPrototype(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonWithPrototype.prototype.introduction = function () {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    };

    function PersonWithGetterSetter(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(PersonWithGetterSetter.prototype, 'name', {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        }
    });
    Object.defineProperty(PersonWithGetterSetter.prototype, 'age', {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        }
    });

    const person1 = new Person(name, age);
    const person2 = new PersonWithPrototype(name, age);
    const person3 = new PersonWithGetterSetter(name, age);

    return [person1, person2, person3];
}

// Example usage:
const name = "John";
const age = 30;
const arrayOfObjects = createObjects(name, age);

arrayOfObjects.forEach((person, index) => {
    console.log(`Person ${index + 1}:`, person);
});
