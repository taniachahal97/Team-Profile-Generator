const { iterInternalSymbol } = require("jsdom/lib/jsdom/living/generated/utils");
const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("getRole", () =>
    {
        it("should return Manager as role", () => {

            const manager = new Manager();
            const output = manager.getRole();

            expect(output).toEqual('Manager');
        });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Manager();
      
            expect("name" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Manager();
      
            expect("id" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Manager();
      
            expect("email" in obj).toEqual(true);
          });
    });

    describe("Initialization", () => 
    {
          it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
            const obj = new Manager();
      
            expect("officeNumber" in obj).toEqual(true);
          });
    });
});