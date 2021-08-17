//function with teamMembers array passed as a variable
const makeTeam = (teamMembers) => {
  console.log(teamMembers);
  //function that takes manager array that was filtered and mapped from below
  //and returns a string of HTML
  const makeManager = (manager) => {
    return `<div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${manager.getName()}</h3></div>
            <div class="col-12"><h4><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12"><p>ID: ${manager.getId()}</p><p>Email: ${manager.getEmail()}</p><p>Office: ${manager.getOfficeNumber()}</p></div>
        </div>
     </div>`;
  };

  //function that takes engineer arrays that were filtered and mapped from below
  //and returns a string of HTML
  const makeEngineer = (engineer) => {
    return `<div class="col-2">
    <div class="row card">
        <div class="col-12"><h3>${engineer.getName()}</h3></div>
        <div class="col-12"><h4><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4></div>
    </div>
    <div class="row info">
        <div class="col-12"><p>ID: ${engineer.getId()}</p><p>Email: ${engineer.getEmail()}</p><p>Github: ${engineer.getGithub()}</p></div>
    </div>
 </div>`;
  };

  //function that takes intern arrays that were filtered and mapped from below
  //and returns a string of HTML
  const makeIntern = (intern) => {
    return `<div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${intern.getName()}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12"><p>ID: ${intern.getId()}</p><p>Email: ${intern.getEmail()}</p><p>School: ${intern.getSchool()}</p></div>
        </div>
     </div>`;
  };

  //declare a variable with an empty array
  const html = [];

  //filters then maps the teamMembers array based on getRole
  //then pushes the string returned from each into the html array
  html.push(
    teamMembers
      .filter((emp) => emp.getRole() === "Manager")
      .map((manager) => makeManager(manager))
  );
  html.push(
    teamMembers
      .filter((emp) => emp.getRole() === "Engineer")
      .map((engineer) => makeEngineer(engineer))
  );
  html.push(
    teamMembers
      .filter((emp) => emp.getRole() === "Intern")
      .map((intern) => makeIntern(intern))
  );

  //returns the html to be appended to the HTML file
  return html.join("");
};

//exports the makeTeam module
module.exports = (teamMembers) => {
  return `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
           <link rel="preconnect" href="https://fonts.googleapis.com">
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
           <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap" rel="stylesheet">
           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
           <link rel="stylesheet" href="./style.css">
           <title>Team Members</title>
       </head>
       <body>
           <header>My Team</header>
           <main class="container">
               <div class="row d-flex justify-content-center">
               ${makeTeam(teamMembers)}
               </div>
               </main>
           </body>
           </html>
       `;
};
