const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const team = []

const questions = [
    {
      type: 'input',
      message: 'Please enter Team Manager name',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter Team Manager Employee ID.',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Please enter Team Manager email address.',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter Office Number',
        name: 'officeNumber',
      }
  ]

  const empQuestions =[ 
    {
        type: 'list',
        message: "Choose Next employee's role",
        choices: ['Engineer', 'Intern', 'Finished Building Team'],
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
        message: "Please enter team member's Github:",
        when: input => input.role === 'Engineer',
        name: 'github',
      },
      {
        type: 'input',
        message: "Intern's School:",
        when: input => input.role === 'Intern',
        name: 'school',
      },
      // {
      //   type: 'confirm',
      //   message: 'Would you like to add another team member?',
      //   default: false,
      //   name: 'addEmployee',
      // }
    ]


  function init() {
    inquirer.prompt(questions)
    .then
    (function (answers){
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
        team.push(manager)
        console.log(team)
        buildTeam()
          // .then
          // buildTeam()
            }
    )
  }

  function buildTeam(){
    inquirer.prompt(empQuestions)
          .then
    (function (answers){      
      if (answers.role='Engineer'){
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
          team.push(engineer)
          console.log(team)
      }
      else if (answers.role='Intern'){
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
          team.push(intern)
          console.log(team)
      }
      else if (answers.role='Finished Building Team'){
        console.log("Team Built, go home now")
      }})
      
      }

  init()
  // .then(buildTeam)
