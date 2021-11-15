const inquirer = require("inquirer");

const fs = require("fs");
//const { fileName, data } = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

//array containing questions for readme application. All questions are validated, except for license.
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your project? (Required)",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter a description for your project (Required)",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions (Required)",
    validate: (installation) => {
      if (installation) {
        return true;
      } else {
        console.log("Please enter the installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information (Required)",
    validate: (usageInfo) => {
      if (usageInfo) {
        return true;
      } else {
        console.log("Please enter the usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines",
    validate: (cont)=>{
      if(cont){
        return true;
      }
      else{
        console.log("Please enter contribution guidelines!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions",
    validate: (tInstructions)=>{
      if(tInstructions){
        return true;
      }
      else{
        console.log("Please enter the test instructions!");
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "What license was used?",
    choices: [
      "NONE",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Apache License 2.0",
      "GNU GPLv2",
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "MIT License",
      "ISC License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub profile",
    validate: (gProfile)=>{
      if(gProfile){
        return true;
      }
      else{
        console.log("Please enter your GitHub profile!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (eAddress)=>{
      if(eAddress){
        return true;
      }
      else{
        console.log("Please enter your email address!");
        return false;
      }
    }
  },
];

//function that writes file. Once called, "README created" is logged in the console
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README created");
  });
}

//function that initializes the app. function runs through the array of questions above, and gets answers from the user. answers are passed to generateMarkdown function. Answers are written to a README file. 
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("./output/README.md", generateMarkdown(answers));
  });
}

//function call to initialize app
init();
