const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => /^[a-zA-Z0-9]{0,3}$/.test(input),
        filter: input => input.toUpperCase()
      },
      {
        name: 'textColor',
        message: 'Enter text color:',
        validate: input => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input),
        filter: input => input.replace('#', '')
      },
      {
        name: 'shape',
        message: 'Choose a shape:',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
      },
      {
        name: 'shapeColor',
        message: 'Enter shape color:',
        validate: input => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input),
        filter: input => input.replace('#', '')
      }
    ])