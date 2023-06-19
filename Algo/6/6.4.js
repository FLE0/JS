class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getname(){
        return this.firstname + " " + this.lastname
    }

    setname(name){
        let names = name.split(' ')
        this.firstname = names[0]
        this.lastname = names[1]
    }
}

let ilias = new person ("ilias", "hamdaoui")

console.log(ilias.getname())

ilias.setname("monsieur l'president")
console.log(ilias.getname())