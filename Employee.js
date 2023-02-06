const fs = require('fs');

const inquirer = require('inquirer');

class Employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        //this.getInfo();
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }

    getInfo(){
        console.log(`${this.name} , ${this.id} , ${this.email}`);
        //var role = this.getRole();
        //console.log(role);
    }
}

//const employee1 = new Employee('Tania', 1, 't@gmail.com')
//employee1.getInfo();
//const role = employee1.getRole();
//console.log(role);



module.exports = Employee;

