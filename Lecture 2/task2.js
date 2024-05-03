function createObjects(name, age) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const person2 = Object.assign({}, { name: name, age: age });

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
    const person3 = new PersonWithGetterSetter(name, age);

    return [person1, person2, person3];
}

const name = "Zhanel";
const age = 24;
const arrayOfObjects = createObjects(name, age);

arrayOfObjects.forEach((person, index) => {
    console.log(`Person ${index + 1}:`, person);
});
