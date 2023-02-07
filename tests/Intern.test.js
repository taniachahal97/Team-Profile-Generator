const Intern = require("../Intern");


describe("Intern", () => {
    describe("getRole", () =>
    {
        it("should return Intern as role", () => {

            const intern = new Intern();
            const output = intern.getRole();

            expect(output).toEqual('Intern');
        });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Intern();
      
            expect("name" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Intern();
      
            expect("id" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Intern();
      
            expect("email" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern();
      
            expect("school" in obj).toEqual(true);
          });
    });
});