class Animal {
    constructor(name,greeting){
        this.name = name;
        this.greeting = greeting;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}


class cat extends Animal{
    constructor(name){
        super(name,"miaou")
    }
}

class dog extends Animal{
    constructor(name){
        super(name,"woof")
    }
}

console.log(new cat ("many").sayHello())
console.log(new dog ("nala").sayHello())