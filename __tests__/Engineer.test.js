const Engineer = require("../lib/Engineer");

test("Can set GitHUb account with constructor", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Kevin", 1, "test@test.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Kevin", 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username with getGithub()", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Kevin", 1, "test@test.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});