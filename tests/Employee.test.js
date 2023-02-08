const Employee = require("../lib/Employee");


describe("Employee", () => {


    describe("getName", () =>
    {
        it("should return the employee name passed to the constructor", () => {

            const employee = new Employee('jordan', 1, 'jordan@gmail.com');
            const output = employee.getName();

            expect(output).toEqual('jordan');
        });
    });

    describe("getId", () =>
    {
        it("should return the employee Id passed to the constructor", () => {

            const employee = new Employee('jordan', 1, 'jordan@gmail.com');
            const output = employee.getId();

            expect(output).toEqual(1);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the employee email passed to the constructor", () => {

            const employee = new Employee('jordan', 1, 'jordan@gmail.com');
            const output = employee.getEmail();

            expect(output).toEqual('jordan@gmail.com');
        });
    });


    
    describe("Initialization", () => 
    {
          it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee();
      
            expect("name" in obj).toEqual(true);
          });
    });


    describe("Initialization", () => 
    {
          it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Employee();
      
            expect("id" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee();
      
            expect("email" in obj).toEqual(true);
          });
    });

});