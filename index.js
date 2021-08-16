//bring in all required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generateHTML");
const generateTeamMembersHTML = require("./src/generateTeamMembersHTML");

//call a variable as an empty array to place team member objects
let teamMembers = [];

//creates promise
const writeFileAsync = util.promisify(fs.writeFile);

//starts the prompts beginning with the manager questions
function managerQuestions() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the team manager's ID number?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern"],
      },
    ])
    //creates a manager object from answers
    .then((answers) => {
      let manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      //pushes the manager object into the teamMembers array above
      teamMembers.push(manager);

      //this switch statement is to direct user to either Engineer questions
      //or Intern questions
      switch (answers.addTeamMember) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        default:
          return;
      }
    })
    //shows error if any
    .catch((err) => console.error(err));
}
//intern questions prompt
function internQuestions() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is the intern's ID number?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    //creates intern object with input provided
    .then((answers) => {
      let intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.internSchool
      );
      //pushs the intern object into the teamMembers variable above
      teamMembers.push(intern);

      //this switch statement is to direct user to either Engineer questions,
      //intern questions, or exits the prompts and generates HTML file
      switch (answers.addTeamMember) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "Exit":
          beginHTML();
        default:
          return;
      }
    })
    //shows error if any
    .catch((err) => console.error(err));
}
//Engineer question prompts
function EngineerQuestions() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github username?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    //creates engineer object with the input provided
    .then((answers) => {
      let engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.engineerGithub
      );
      //pushes engineer object into teamMembers array above
      teamMembers.push(engineer);
      
      //this switch statement is to direct user to either Engineer questions,
      //intern questions, or exits the prompts and generates HTML file
      switch (answers.addTeamMember) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "Exit":
          beginHTML();
        default:
          return;
      }
    })
    //shows error if any
    .catch((err) => console.error(err));
}

//function to write the HTML file
function beginHTML() {
  //creates file and writes the beginning of the HTML
  writeFileAsync("./dist/index.html", generateHTML());
  //appends the team members HTML to the file already created
  fs.appendFileSync("./dist/index.html",generateTeamMembersHTML(teamMembers));
  fs.appendFileSync("./dist/index.html",endOfHTMLPage());
  
}



//function that returns the end of the HTML file
function endOfHTMLPage() {
  return `</div>
    </main>
</body>
</html>`;
}

//initializes the succession of prompts starting with the manager questions
managerQuestions();
