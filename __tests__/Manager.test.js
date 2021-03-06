const Manager = require("../lib/Manager");

test("Can set office number with constructor argument", () => {
  const testValue = 1;
  const manager = new Manager("Kevin", 1, "test@test.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test("getRole() should return 'Manager'", () => {
  const testValue = "Manager";
  const manager = new Manager("Kevin", 1, "test@test.com", 1);
  expect(manager.getRole()).toBe(testValue);
});

test("Can get office number with getOffice()", () => {
  const testValue = 1;
  const manager = new Manager("Kevin", 1, "test@test.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});