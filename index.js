const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee')

const writeFileAsync = util.promisify(fs.writeFile);
// name, employee ID, email address, and office number
function managerQuestions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the project about? Please give a description.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What does the user need to install to run this application?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'How is the app used? Please give instructions',
      },
     
    ]);
    
  };