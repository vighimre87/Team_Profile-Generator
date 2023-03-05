const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // Regex has been taken from https://www.w3resource.com/javascript/form/all-numbers.php
        if (/^[0-9]+$/.test(officeNumber)) {
            this.officeNumber = officeNumber;
            console.log("A manager has been created.");
        }
        else {console.log("Please enter a valid integer number!");}
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;