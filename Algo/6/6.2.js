class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    hello(){
        console.log("hello " + this.firstname + " " + this.lastname)
    }
}

new person("ilias", "hamdaoui").hello()
