function generateManagerHTML(teamManager) {
    return `<div class="col-2">
    <div class="row card">
        <div class="col-12"><h3>${teamManager[0].name}</h3></div>
        <div class="col-12"><h4><i class="fas fa-mug-hot"></i> ${teamManager[0].getRole()}</h4></div>
    </div>
    <div class="row info">
        <div class="col-12"><p>ID: ${teamManager[0].id}</p><p>Email: ${teamManager[0].email}</p><p>Office: ${teamManager[0].officeNumber}</p></div>
    </div>
 </div>`
   }

   module.exports = generateManagerHTML;