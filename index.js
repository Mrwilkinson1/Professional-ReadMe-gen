
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 

const questions  = [
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
    type: "list",
    message: "List license's",
    name: "License",
    choices: ["MIT", "APACHE"],
},
{
    type: "input",
    message: "How would you contribute?",
    name: "Contributing",
},
{
    type: "input",
    message: "Provide test instructions.",
    name: "Tests",
},
{
    type: "input",
    message: "Provide any additional information. ",
    name: "Information",
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

inquirer.prompt(questions)
.then((data) => {

    fs.writeFile('auto-generated-readme.md',generateMarkdown(data) , (err) => {
        if(err) 
            {console.error(err)} 
        
        else    
            {console.log('')}
    })
})
