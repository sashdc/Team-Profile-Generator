// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
    super(name, id, email)
    this.github=github
}
getRole(){
    return 'Engineer'
}
getGitHub(){
    return this.github
}

}

module.exports = Engineer