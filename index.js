const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      message: 'Please enter Team Manager name',
      name: 'manager',
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
        name: 'officenumber',
      },
      {
        type: 'list',
        message: 'Please select next team member type',
        choices: ['Engineer','Intern', 'Finished Building team'],
        name: 'next',
      },
  ]

  const engQuestions =[ 
    {
    type: 'input',
    message: "Please enter the engineer's Name.",
    name: 'name',
  },
  {
    type: 'input',
    message: "Please enter the engineer's email address.",
    name: 'email',
  },
  {
    type: 'input',
    message: "Please enter the engineer's ID#.",
    name: 'id',
  },
  {
    type: 'input',
    message: "Please enter the engineer's GitHub username.",
    name: 'github',
  },
]

  const intQuestions =[ 
    {
        type: 'input',
        message: "Please enter the intern's Name.",
        name: 'name',
      },
      {
        type: 'input',
        message: "Please enter the intern's email address.",
        name: 'email',
      },
      {
        type: 'input',
        message: "Please enter the intern's ID#.",
        name: 'id',
       },
       {
    type: 'input',
    message: "Please enter the intern's School.",
    name: 'school',
  },
  {
    type: 'list',
    message: 'Please select next team member type',
    choices: ['Engineer','Intern', 'Finished Building team'],
    name: 'next',
  },
]

  function init() {
    inquirer.prompt(questions)
    .then
    (function (answers){
        const manager = new Manager (answers.manager, answers.id, answers.email, answers.officenumber)
        console.log(answers)
    }
    )
  }

  init()