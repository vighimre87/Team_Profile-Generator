// TODO: Write code to define and export the Employee class
class Employee {
    // Parent class's constructor that takes 3 parameter and initialize them
    constructor(name, id, email) {
        if (/^[A-Za-z]+$/.test(name)) {this.name = name;}
        else {console.log("Please enter a valid firstName!");}
        if (/^[0-9]+$/.test(id)) {this.id = id;}
        else {console.log("Please enter a valid integer number!")}
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {this.email = email;}
        else {console.log("Please enter a valid email address!");}
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;