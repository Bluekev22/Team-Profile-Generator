const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');
const generateManagerHTML = require('./src/generateManagerHTML');

const generatedHTMLPath = "./dist/TeamProfile.html";

let teamManager = [];
let teamEngineers = [];
let teamInterns = [];

const writeFileAsync = util.promisify(fs.writeFile);

function managerQuestions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'managerID',
        message: "What is the team manager's ID number?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",
      },
      {
        type: 'list',
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern"],
      }
     
    ])
    .then(answers => {
      let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
      teamManager.push(manager);
      if (answers.addTeamMember === "Intern") {
          internQuestions();
      } if (answers.addTeamMember === "Engineer") {
          EngineerQuestions();
      }
    })

    .catch((err) => console.error(err));
    
  };


  function internQuestions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID number?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
      },
      {
        type: 'list',
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern", "Exit"],
      }
     
    ])

    .then(answers => {
      let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
      teamInterns.push(intern);
      if (answers.addTeamMember === "Intern") {
          internQuestions();
      } if (answers.addTeamMember === "Engineer") {
          EngineerQuestions();
      } if (answers.addTeamMember === "Exit") {
        generateHTML();
      }
    })

    .catch((err) => console.error(err));
    
  };


  function EngineerQuestions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID number?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address?",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's github username?",
      },
      {
        type: 'list',
        name: "addTeamMember",
        message: "Select team members to add",
        choices: ["Engineer", "Intern", "Exit"],
      }
     
    ])

    .then(answers => {
      let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
      teamEngineers.push(engineer);
      if (answers.addTeamMember === "Intern") {
          internQuestions();
      } if (answers.addTeamMember === "Engineer") {
          EngineerQuestions();
      } if (answers.addTeamMember === "Exit") {
        beginHTML();
      }
    })

    .catch((err) => console.error(err));
    
  };

  function beginHTML() {
    writeFileAsync('./dist/index.html', generateHTML());
    fs.appendFile('./dist/index.html', generateManagerHTML(teamManager), function(err){
      if (err) throw err;
    });
    fs.appendFile('./dist/index.html', generateEngineersHTML(teamEngineers), function(err){
      if (err) throw err;
    });
  }

  
  function generateEngineersHTML(teamEngineers) {
    for (const engineer of teamEngineers) {
    return `<div class="col-2">
    <div class="row card">
        <div class="col-12"><h3>${engineer.name}</h3></div>
        <div class="col-12"><h4><i class="fas fa-glasses"></i>${engineer.getRole()}</h4></div>
    </div>
    <div class="row info">
        <div class="col-12"><p>ID: ${engineer.id}</p><p>Email: ${engineer.email}</p><p>Office: ${engineer.github}</p></div>
    </div>
 </div>`
   }}

  function endOfHTMLPage() {
    return `</div>
    </main>
</body>
</html>`
  }



  managerQuestions();