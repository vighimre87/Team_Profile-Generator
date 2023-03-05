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

// -----------------------------------------------------------------

// Regular expressions for input validations

// Regex has been taken from https://www.w3resource.com/javascript/form/all-letters-field.php#:~:text=You%20can%20write%20a%20JavaScript,HTML%20form%20contains%20only%20letters.&text=To%20get%20a%20string%20contains,%2F)%20which%20allows%20only%20letters.
const nameRegex = /^[A-Za-z]+$/;
// Regex has been taken from https://www.w3resource.com/javascript/form/all-numbers.php
const numRegex = /^[0-9]+$/;
// Regex has been taken from https://www.w3resource.com/javascript/form/email-validation.php
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Regex has been taken from https://codingbeautydev.com/blog/javascript-check-if-string-contains-only-letters-and-spaces/
const schoolRegex = /^[A-Za-z\s]*$/;
// Regex has been taken from https://github.com/shinnn/github-username-regex
const githubRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

// Array to store the Employee objects
const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Function to write data into the HTML file
function writeToHTML(data) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, data, (err) => {
    err ? console.error(err) : console.log("You have succesfully created your team.");
  });
}


// Function to start the program and create a manager
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
      validate: function(managerName) {
        if (nameRegex.test(managerName)) return true;
        else {
          console.log("Please enter a valid firstname with only letters!");
          return false;
  }
      }
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "managerID",
      validate: function(managerID) {
        if (numRegex.test(managerID)) return true;
        else {
          console.log("Please enter a valid integer number for employee id!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "managerEmail",
      validate: function(managerEmail) {
        if (emailRegex.test(managerEmail)) return true;
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
    // Once we have all the necessary data we create a manager object and push it to the team array
    const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNum);
    console.log(manager instanceof Employee);
    team.push(manager);
    fetchOptions();
  })
}

// Function to fetch the options to the user
function fetchOptions() {
  inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do next?",
    name: "userChoice",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"]
  }
]).then((response) => {
  console.log(response.userChoice);
  if (response.userChoice === "Add an engineer") {
    addEngineer();
  } else if (response.userChoice === "Add an intern") {
    addIntern();
  } else {
    const htmlTemplate = render(team);
    writeToHTML(htmlTemplate);
  }
});
}

// Function to add an intern to the team
function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName",
      validate: function(internName) {
        if (nameRegex.test(internName)) return true;
        else {
          console.log("Please enter a valid firstname with only letters!");
          return false;
  }
      }
    },
    {
      type: "input",
      message: "What is the intern's employee ID?",
      name: "internID",
      validate: function(internID) {
        if (numRegex.test(internID)) return true;
        else {
          console.log("Please enter a valid integer number for employee id!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "internEmail",
      validate: function(internEmail) {
        if (emailRegex.test(internEmail)) return true;
        else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "Where does the intern go to school?",
      name: "school",
      validate: function(school) {
        if (schoolRegex.test(school)) return true;
        else {
          console.log("Please enter only letters and spaces for school name!");
          return false;
        }
      }
    }
  ]).then((response) => {
    console.log(response);
    // Once we have all the necessary data we create an intern object and push it to the team array
    const intern = new Intern(response.internName, response.internID, response.internEmail, response.school);
    console.log(intern instanceof Employee);
    team.push(intern);
    fetchOptions();
  })
}

// Function to add an engineer to the team
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName",
      validate: function(engineerName) {
        if (nameRegex.test(engineerName)) return true;
        else {
          console.log("Please enter a valid firstname with only letters!");
          return false;
  }
      }
    },
    {
      type: "input",
      message: "What is the engineer's employee ID?",
      name: "engineerID",
      validate: function(engineerID) {
        if (numRegex.test(engineerID)) return true;
        else {
          console.log("Please enter a valid integer number for employee id!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "engineerEmail",
      validate: function(engineerEmail) {
        if (emailRegex.test(engineerEmail)) return true;
        else {
          console.log("Please enter a valid email address!");
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "github",
      validate: function(github) {
        if (githubRegex.test(github)) return true;
        else {
          console.log("Please enter a valid GitHub username!");
          return false;
        }
      }
    }
  ]).then((response) => {
    console.log(response);
    const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.github);
    console.log(engineer instanceof Employee);
    team.push(engineer);
    fetchOptions();
  })
}

init();