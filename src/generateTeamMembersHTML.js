//function with teamMembers array passed as a variable
const makeTeam = teamMembers => {
    //function that takes manager array that was filtered and mapped from below
    //and returns a string of HTML
    const makeManager = manager => {
        return `<div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${manager.getName()}</h3></div>
            <div class="col-12"><h4><i class="fas fa-mug-hot"></i> Manager</h4></div>
        </div>
        <div class="row info">
            <div class="col-12"><p>ID: ${manager.getID()}</p><p>Email: ${manager.getEmail()}</p><p>Office: ${manager.getOfficeNumber()}</p></div>
        </div>
     </div>`
    }

    //function that takes engineer arrays that were filtered and mapped from below
    //and returns a string of HTML
    const makeEngineer = engineer => {
        return `<div class="col-2">
    <div class="row card">
        <div class="col-12"><h3>${engineer.getName()}</h3></div>
        <div class="col-12"><h4><i class="fas fa-glasses"></i> Engineer</h4></div>
    </div>
    <div class="row info">
        <div class="col-12"><p>ID: ${engineer.getID()}</p><p>Email: ${
      engineer.getEmail()
    }</p><p>Github: ${engineer.getGithub()}</p></div>
    </div>
 </div>`
    }

    //function that takes intern arrays that were filtered and mapped from below
    //and returns a string of HTML
    const makeIntern = intern => {
        return `<div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${intern.getName()}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> Intern</h4></div>
        </div>
        <div class="row info">
            <div class="col-12"><p>ID: ${intern.getID()}</p><p>Email: ${
          intern.getEmail()
        }</p><p>School: ${intern.getSchool()}</p></div>
        </div>
     </div>`
    }

    //declare a variable with an empty array
    const html = [];

    //filters then maps the teamMembers array based on getRole
    //then pushes the string returned from each into the html array
    html.push(teamMembers
        .filter(emp => emp.getRole() === "Manager"))
        .map(manager => makeManager(manager))
    html.push(teamMembers
        .filter(emp => emp.getRole() === "Engineer"))
        .map(engineer => makeEngineer(engineer))
    html.push(teamMembers
        .filter(emp => emp.getRole() === "Intern"))
        .map(intern => makeIntern(intern))

        //returns the html to be appended to the HTML file 
        return html;
        

}

   //exports the makeTeam module
   module.exports = makeTeam;