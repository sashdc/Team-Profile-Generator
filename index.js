const Employee = require('./employee');

const questions = [
    {
      type: 'input',
      message: 'Please enter Team Manager name',
      name: 'manager',
    },
    {
        type: 'input',
        message: 'Please enter Team Manager Employee ID',
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
