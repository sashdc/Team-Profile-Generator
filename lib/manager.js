// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const Employee = require('./employee')


class Manager extends Employee {
    constructor (officeNumber)
    super (name, id, email, getName, getId, getEmail, 'Manager')
}