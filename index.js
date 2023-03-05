const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");

// Regular expressions for input validations

// Regex has been taken from https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=You%20can%20write%20a%20JavaScript,HTML%20form%20contains%20only%20letters.&text=To%20get%20a%20string%20contains,%2F)%20which%20allows%20only%20letters.
const nameRegex = /^[A-Za-z]+$/;
// Regex has been taken from https://www.w3resource.com/javascript/form/all-numbers.php
const numRegex = /^[0-9]+$/;
// Regex has been taken from https://www.w3resource.com/javascript/form/email-validation.php
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Regex has been taken from https://codingbeautydev.com/blog/javascript-check-if-string-contains-only-letters-and-spaces/
const schoolRegex = /^[A-Za-z\s]*$/;
// Regex has been taken from https://stackoverflow.com/questions/30281026/regex-parsing-github-usernames-javascript
const githubRegex = /\B@([a-z0-9](?:-(?=[a-z0-9])|[a-z0-9]){0,38}(?<=[a-z0-9]))/gi;



// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Function to write into the HTML file
function writeToHTML() {}

// Function to validate names
// function validateName(str) {
//   if (nameRegex.test(str)) return true;
//   else {
//     console.log("Please enter a valid firstname with only letters!");
//     return false;
//   }
// }

// Function to validate office number and id-s
// function validateNumbers(num) {
//   if (numRegex.test(num)) return true;
//   else {
//     console.log("Please enter a valid integer number!");
//     return false;
//   }
// }

// Function to validate email
// function validateEmail(email) {
//   if (emailRegex.test(email)) return true;
//   else {
//     console.log("Please enter a valid email address!");
//     return false;
//   }
// }

function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "personName",
      validate: function(personName) {
        if (nameRegex.test(personName)) return true;
        else {
          console.log("Please enter a valid firstname with only letters!");
          return "";
  }
      }
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "empId",
      validate: function(empId) {
        if (numRegex.test(empId)) return true;
        else {
          console.log("Please enter a valid integer number for employee id!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "email",
      validate: function(email) {
        if (emailRegex.test(email)) return true;
        else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNum",
      validate: function(officeNum) {
        if (numRegex.test(officeNum)) return true;
        else {
          console.log("Please enter a valid integer number for office number!");
          return false;
        }
      }
    }
  ]).then((response) => {
    console.log(response);
    const manager = new Manager(response.personName, response.empId, response.email, response.officeNum);
    console.log(manager instanceof Employee);
    fetchOptions();
  })
}

function fetchOptions() {
  inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do next?",
    name: "userChoice",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"]
  }
]).then((response) => {
  console.log(response);
  console.log(response.userChoice);
  switch(response.userChoice) {
    case "Add an engineer":
      addEngineer();
      break;
    case "Add an intern":
      addIntern();
      break;
    case "Finish building team":
      finishBuilding();
      break;
  }
})
}

function addIntern() {
  fetchOptions();
}

function addEngineer() {
  fetchOptions();
}

function finishBuilding() {}

init();