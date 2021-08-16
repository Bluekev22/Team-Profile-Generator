const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generateHTML");
const generateTeamMembersHTML = require("./src/generateTeamMembersHTML");

let teamMembers = [];

const writeFileAsync = util.promisify(fs.writeFile);

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
    .then((answers) => {
      let manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      // if (answers.addTeamMember === "Intern") {
      //    internQuestions();
      // } if (answers.addTeamMember === "Engineer") {
      //     EngineerQuestions();
      // }
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

    .catch((err) => console.error(err));
}

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

    .then((answers) => {
      let intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      if (answers.addTeamMember === "Intern") {
        internQuestions();
      }
      if (answers.addTeamMember === "Engineer") {
        EngineerQuestions();
      }
      if (answers.addTeamMember === "Exit") {
        generateHTML();
      }
    })

    .catch((err) => console.error(err));
}

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

    .then((answers) => {
      let engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      if (answers.addTeamMember === "Intern") {
        internQuestions();
      }
      if (answers.addTeamMember === "Engineer") {
        EngineerQuestions();
      }
      if (answers.addTeamMember === "Exit") {
        beginHTML();
      }
    })

    .catch((err) => console.error(err));
}

function beginHTML() {
  writeFileAsync("./dist/index.html", generateHTML());
  
}




function endOfHTMLPage() {
  return `</div>
    </main>
</body>
</html>`;
}

managerQuestions();
