// TODO: Write code to define and export the Employee class
class Employee {
    // Parent class's constructor that takes 3 parameter and initialize them
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log("An employee has been created.");
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