class Person {
    constructor(name) {
        this.name = name;
    }
    callName() {
        return "Hello, " + this.name;
    }
}

const person = new Person("Heo");

console.log(person.callName());