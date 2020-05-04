const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios');
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


const questions = [
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "GitHubUsername"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "ProjectTitle"
    },
    {
        type: "input",
        message: "Description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "How do you install it?",
        name: "Install"
      
    },
    {
        type: "input",
        message: "How do you use it.",
        name: "Usage"
    },
    {
        type: "list",
        message: "what type of license do you want to apply.",
        name: "License",
        choices: [{
            name: "GNU General Public License v3.0",
        },
        {
            name: "Apache License 2.0"  
        },
        {
            name: "The Unlicense"
        },
        {
             name: "MIT License"
        }]
    },
    {
        type: "input",
        name: "Contributors",
        message: "How many contributors will there be on your project?"}]



        
inquirer
  .prompt(questions) 
  .then(answers => {
    console.log("inside .then", answers)
    const user = {avatar_url,name,email
        
    }
    generateMarkdown(answers, user) 

  })
  .catch(error => {
    if(error.isTtyError) {
     
    } else {
     
    }
  });