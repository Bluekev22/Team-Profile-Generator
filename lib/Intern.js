const Employee = require('./Employee');

/*
In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`
*/

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
      
  }
  getSchool()

  getRole() {
      return "Intern";
  }
}