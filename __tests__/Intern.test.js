const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
  const testValue = "Yale";
  const intern = new Intern("Kevin", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return 'Intern'", () => {
  const testValue = "Intern";
  const intern = new Intern("Kevin", 1, "test@test.com", "Yale");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school with getSchool()", () => {
  const testValue = "Yale";
  const intern = new Intern("Kevin", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});