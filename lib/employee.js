// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

class Employee {
    constructor (name, id, email){
    this.name = name
    this.id = id
    this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    // Returns 'Employee'
    getRole(){
        return 'Employee'
    }
    
}

module.exports = Employee;