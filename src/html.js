// destructurs manager class and builds HTML structure for the Manager card
const ManCard = function(manager) {
    const {name, id, email, officeNumber} = manager;
  return `
    <section class="col-4 mt-3">
    <div class="card h-100 border-primary shadow p-3 mb-5 bg-white rounded">
    <div class="card-title border-primary text-center mt-2 bg-primary text-white">
   
    <h1>${name}</h1>
                <h2>Manager</h2>
            </div>
            <div class = 'text-center m-2'>
            <li class="list-group-item">ID#: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
            </div>
        </div>
    </section>
    `}
// destructurs engineer class and builds HTML structure for the engineer card

    const EngCard = function(engineer) {
        const {name, id, email, github} = engineer;
      return `
        <section class="col-4 mt-3">
        <div class="card h-100 border-danger shadow p-3 mb-5 bg-white rounded">
        <div class="card-title border-danger text-center mt-2 bg-danger text-white">
                    <h1>${name}</h1>
                    <h2>Engineer</h2>
                </div>
                <div class = 'text-center m-2'>
                <li class="list-group-item">ID#: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a></li>
                </div>
            </div>
        </section>
        `
    }
// destructurs inern class and builds HTML structure for the intern card
    const IntCard = function(intern) {
        const {name, id, email, school} = intern;
      return `
        <section class="col-4 mt-3">
        <div class="card h-100 border-success shadow p-3 mb-5 bg-white rounded">
        <div class="card-title border-success text-center mt-2 bg-success text-white">
                    <h1>${name}</h1>
                    <h2>Intern</h2>
                </div>
                <div class = 'text-center m-2'>
                <li class="list-group-item">ID#: ${id}</li>
                <li class="list-group-item">Email:<a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
                </div>
        </div>
    </section>
        `
    }
// sorts and assigns data  by role so they are built using the right card template
    buildPage = data => {
        const cards = []
      
        for (let i = 0; i < data.length; i++) {
          let team = data[i]
          let role = team.getRole()
      
          if (role === 'Manager') {
            const managerCard = ManCard(team)
            cards.push(managerCard)
          }
      
          else if (role === 'Engineer') {
            const engineerCard = EngCard(team)
            cards.push(engineerCard)
          }
      
          else if (role === 'Intern') {
            const internCard = IntCard(team)
            cards.push(internCard)
          }
        }
      
        const teamCards = cards.join('')
      
        return pageHtml(teamCards)
      }
      // full page html to inserrt cards and data into
      const pageHtml = function(teamCards) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Team</title>
                       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                    </head>
        <body>
            <header>
            <div class="jumbotron jumbotron-fluid bg-dark text-white">
            <h1 class="text-center">Team Profile</h1>
                </nav>
            </header>
            <main>
                <section class="container">
                    <div class="row justify-content-center">
                        ${teamCards}
                    </div>
                </section>
            </main>
            
        </body>
        </html>
      `
      }
      
      module.exports = buildPage