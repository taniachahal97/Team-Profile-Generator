const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("getRole", () =>
    {
        it("should return Engineer as role", () => {

            const engineer = new Engineer();
            const output = engineer.getRole();

            expect(output).toEqual('Engineer');
        });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
      
            expect("name" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
      
            expect("id" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
      
            expect("email" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
            const obj = new Engineer();
      
            expect("github" in obj).toEqual(true);
          });
    });

});