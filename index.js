const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/html')
const inquirer = require('inquirer');
const fs = require('fs');

const team = []

const questions = [
    {
      type: 'input',
      message: "Please enter the Team Manager's name",
      name: 'name',
    },
    {
        type: 'input',
        message: "Please enter Team Manager's Employee ID#.",
        name: 'id',
      },
      {
        type: 'input',
        message: "Please enter Team Manager's email address.",
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter Office Number',
        name: 'officeNumber',
      }
  ]

const moreQuestions = [  {
      type: 'confirm',
      message: 'Would you like to add another team member?',
      default: true,
      name: 'addEmployee',
    }]

const empQuestions =[ 
    {
        type: 'list',
        message: "Choose Next employee's role",
        choices: ['Engineer', 'Intern'],
        name: 'role'
      },
      {
        type: 'input',
        message: "Please enter the team member's name.",
        name: 'name'
      },
      {
        type: 'input',
        message: "Please enter team member's ID#.",
        name: 'id'
      },
      {
        type: 'input',
        message: "Please enter team member's Email address.",
        name: 'email'
      },
      {
        type: 'input',
        message: "Please enter the engineer's Github:",
        when: input => input.role === 'Engineer',
        name: 'github',
      },
      {
        type: 'input',
        message: "Please enter the Intern's School:",
        when: input => input.role === 'Intern',
        name: 'school',
      },
         ]

function init() {
    inquirer.prompt(questions)
    .then
    (function (answers){
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
        team.push(manager)
        console.log('<---------------------------------->')
        addMore()
                }
    )
  }

function addMore(){
  inquirer.prompt(moreQuestions)
  .then
  (function (answers){      
    if (answers.addEmployee=== true){
      buildTeam()
    }
    else if (answers.addEmployee== false){
      createPage(team)     }
})}

  function buildTeam(){
    inquirer.prompt(empQuestions)
          .then
    (function (answers){      
      if (answers.role==='Engineer'){
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
          team.push(engineer)
          console.log('<---------------------------------->')
          addMore()
      }
      else if (answers.role==='Intern'){
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
          team.push(intern)
          console.log('<---------------------------------->')

          addMore()
      }})}

function createPage(team) { 
   fs.writeFile('team.html', buildPage(team), (err) =>
   err ? console.log(err) : console.log('Successfully created Team Page!')
      );}


init()
