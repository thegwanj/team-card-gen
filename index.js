// require 'inquirer'
const inquirer = require('inquirer');

// Create an empty array list to store employee objects
let employees = [];

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
        ])
        .then((response) =>
            console.log(response),
            
        )

    // THEN build a Manager object

// Gather Engineer data

    // inquirer.prompt()
    inquirer
        .prompt([
            {
            type: 'input',
            message: `What is your engineer's name?`,
            name: 'engineerName',
            },
            {
            type: 'input',
            message: `What is your engineer's id?`,
            name: 'engineerId',
            },
            {
            type: 'input',
            message: `What is your engineer's email?`,
            name: 'engineerEmail',
            },
            {
            type: 'input',
            message: `What is your engineer's GitHub username?`,
            name: 'engineerGitHub',
            },
        ])
        .then((response) =>
            console.log(response),
            
        )
    // THEN build an Engineer object

// Gather Intern data

    // inquirer.prompt()
    inquirer
        .prompt([
            {
            type: 'input',
            message: `What is your intern's name?`,
            name: 'internName',
            },
            {
            type: 'input',
            message: `What is your intern's id?`,
            name: 'internId',
            },
            {
            type: 'input',
            message: `What is your intern's email?`,
            name: 'internEmail',
            },
            {
            type: 'input',
            message: `What is your intern's school?`,
            name: 'internSchool',
            },
        ])
        .then((response) =>
            console.log(response),
            
        )
    // THEN build an Intern object

// Ask "which team menmber they want to add" or "are they done"

    // inquirer.prompt()
    inquirer
        .prompt([
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
    // THEN deciding which function to call

// Generate the HTML and write it to a file
