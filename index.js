
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 

// Questions asked
const questions = 
[
{
    // Title of Project
    type: "input",
    message: "What's the project title?",
    name: "Title",
},
{
    // Project desciption
    type: "input",
    message: "Please describe the project",
    name: "Description",
},
{
    type: "input",
    message: "Give installation instructions.",
    name: "Installation",
},
{
    type: "input",
    message: "Give detailed usage of project.",
    name: "Usage",
},
{
    type: "input",
    message: "List liecense's",
    name: "License",
    choices: [],
},
{
    type: "input"
    message: "How would you contribute",
    name: "Contributing",
},
{
    type: "input",
    message: "Provide test instructions",
    name: "Tests",
},
{
    type: "input",
    message: "",
    name: "",
},
{
    type: "input",
    message: "Enter your email address.",
    name: "email",
},
{
    type: "input",
    message: "Enter your Github username",
    name: "Github",
},







];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
