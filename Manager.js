//Import the parent class

const { createPromptModule } = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNumber){

        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}


//const employee2 = new Manager('Jenny', 2, 'je@gmail.com', 234544)
//employee2.getInfo();
//const role = employee2.getRole();
//console.log(role);

module.exports = Manager;