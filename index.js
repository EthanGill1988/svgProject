const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Choose your Shape!!',
        choices: shapeChoices
    }
])
