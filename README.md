# README Generator

## Table of Contents
- [Description](#description)
- [Usage](#usage)

## Description
This is the week 10 project for our class. Using our new knowledge of Objects and Jest, we need to create a team card generator using template literals and inquirer. The HTML  must be generated from our javascript code rather than being written in beforehand. All objects should also pass a series of tests using Jest. The following is the user story and acceptance criteria for the project:

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage
In the terminal, the user is asked a series of questions relating to the employees. These answers are then taken and put in a HTML file, which is stored in the dist folder.
The following link is a video with an example of how it can be used: https://watch.screencastify.com/v/1hBMYAbE2tNZlkxVGBQF
