const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create instance of employee constructor", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Kevin";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 1;
        const employee = new Employee("Kevin", testValue);
        expect(employee.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const employee = new Employee("Kevin", 1, testValue);
        expect(employee.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Kevin";
            const employee = new Employee(testValue);
            expect(employee.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 1;
            const employee = new Employee("Kevin", testValue);
            expect(employee.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const employee = new Employee("Kevin", 1, testValue);
            expect(employee.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const employee = new Employee("Kevin", 1, "test@test.com");
            expect(employee.getRole()).toBe(testValue);
        });
    });
    
});