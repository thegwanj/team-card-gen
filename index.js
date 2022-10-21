// require 'inquirer'
const inquirer = require('inquirer');

// Create an empty array list to store employee objects

// Gather manager data

    // inquirer.prompt()
    inquirer
        .prompt([
            {
            type: 'input',
            message: `What is the team manager's name?`,
            name: 'managerName',
            },
            {
            type: 'input',
            message: `What is the team manager's id?`,
            name: 'managerId',
            },
            {
            type: 'input',
            message: `What is the team manager's email?`,
            name: 'managerEmail',
            },
            {
            type: 'input',
            message: `What is the team manager's office number?`,
            name: 'managerOffice',
            },
            {
            type: 'list',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
            message: `Which type of team member would you like to add?`,
            name: 'addEmployee'
            },
        ])
        .then((response) =>
            console.log(response),
            
        )

    // THEN build a Manager object

// Gather Engineer data

    // inquirer.prompt()

    // THEN build an Engineer object

// Gather Intern data

    // inquirer.prompt()

    // THEN build an Intern object

// Ask "which team menmber they want to add" or "are they done"

    // inquirer.prompt()

    // THEN deciding which function to call

// Generate the HTML and write it to a file
