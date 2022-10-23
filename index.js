// require 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create an empty array list to store employee objects
let employees = [];

// Gather manager data

function managerPrompts(){
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
        .then((response) => {
            console.log(response);
            // THEN build a Manager object
            var manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            employees.push(manager);

            choicePrompts();
    })
    }
    

// Gather Engineer data

function engineerPrompts(){
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
        .then((response) => {
            console.log(response);
            // THEN build an Engineer object
            var engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
            employees.push(engineer);
            
            choicePrompts();
        })
    }
// Gather Intern data

function internPrompts(){
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
        .then((response) => {
            console.log(response);
            // THEN build an Intern object
            var intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employees.push(intern);
            
            choicePrompts();
        })
    }

// Ask "which team menmber they want to add" or "are they done"

function choicePrompts(){
    inquirer
        .prompt([
            {
            type: 'list',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
            message: `Which type of team member would you like to add?`,
            name: 'addEmployee'
            },
        ])
        .then((response) => {
            console.log(response);
            // THEN deciding which function to call
            if(response.addEmployee == 'Engineer'){
                engineerPrompts();
            } else if(response.addEmployee == 'Intern'){
                internPrompts();
            } else {
                console.log(employees);
                generateHTML();
            }
        })
    }

// Generate the HTML and write it to a file
function generateHTML(){
    let html = ``;

    // Loop through each employee in employees
    for(employee in employees){
        // See what role they are
        if(employee.getRole() == 'Manager'){
            html += `<div>
            <h2>${employee.name}</h2>
            <h2>${employee.id}</h2>
            <h2>${employee.email}</h2>
            <h2>${employee.office}</h2>
            </div>`;
        }else if(employee.getRole() == 'Engineer'){
            html += `<div>
            <h2>${employee.name}</h2>
            <h2>${employee.id}</h2>
            <h2>${employee.email}</h2>
            <a>href="https://github.com/${employee.github}">${employee.github}</a>
            </div>`;
        }else {
            html += `<div>
            <h2>${employee.name}</h2>
            <h2>${employee.id}</h2>
            <h2>${employee.email}</h2>
            <h2>${employee.school}</h2>
            </div>`;
        }
        // Save template to file        
        fs.writeFile(`./output/output.html`, html, err => {
            err ? console.error(err) : console.log('Success!')
        });
    }
}


managerPrompts();