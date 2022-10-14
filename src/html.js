// destructures manager class and builds HTML structure for the Manager card
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
            <li class="list-group-item"><b>ID#:</b> ${id}</li>
            <li class="list-group-item"><b>Email:</b> <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item"><b>Office Number:</b> ${officeNumber}</li>
            </div>
        </div>
    </section>
    `}
// destructures engineer class and builds HTML structure for the engineer card

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
                <li class="list-group-item"><b>ID#:</b> ${id}</li>
                <li class="list-group-item"><b>Email:</b> <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><b>Github:</b> <a href="https://github.com/${github}">${github}</a></li>
                </div>
            </div>
        </section>
        `
    }
// destructures intern class and builds HTML structure for the intern card
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
                <li class="list-group-item"><b>ID#:</b> ${id}</li>
                <li class="list-group-item"><b>Email:</b> <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><b>School:</b> ${school}</li>
                </div>
        </div>
    </section>
        `
    }
// sorts and assigns data  by role and builds cards using the right card template
    buildPage = data => {
        const cards = []
      
        for (let i = 0; i < data.length; i++) {
          let team = data[i]
          let role = team.getRole()
      
          if (role === 'Manager') {
            const manCard = ManCard(team)
            cards.push(manCard)
          }
      
          else if (role === 'Engineer') {
            const engCard = EngCard(team)
            cards.push(engCard)
          }
      
          else if (role === 'Intern') {
            const intCard = IntCard(team)
            cards.push(intCard)
          }
        }

        const allCards = cards.join('')
      
        return pageHtml(allCards)
      }
      // full page html to inserrt cards and data into
      const pageHtml = function(allCards) {
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
            <div class="jumbotron shadow jumbotron-fluid bg-dark text-white">
            <h1 class="text-center">Team Profile</h1>
                </nav>
            </header>
            <main>
                <section class="container">
                    <div class="row justify-content-center">
                        ${allCards}   </div>
                </section>
            </main>
            
        </body>
        </html>
      `
      }
      
      module.exports = buildPage