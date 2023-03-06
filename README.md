# Team_Profile-Generator

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
It is a simple console application that let you create your team profile and display it in a HTML file. Made in OOP style and using Test Driven Development approach.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Installation
  1. Download the master folder from GitHub or clone the project folder to your local machine
  2. In order to run the application you will need Node JS (I used v16.1). If you haven't got it, install it on your computer.
  3. Once you have these steps navigate to the root folder in the command line and type:
  ```
  npm init -y
  ```
  4. Then run the next commands:
  ```
  npm i inquirer
  ```
  ```
  npm i jest
  ```
  5. Create a .gitignore file in the root folder and add "node_modules"
  6. Add Jest to devDependencies the package.json file and Inquirer and Jest to dependencies

## Usage
  The application is a Node.js command line application that will take information about employees on a software engineering team, then generates a HTML webpage that displays data for each person. The application was built by using OOP method and TDD approach so the first step was to pass all the given tests. If you want to check that all test are passed just run the following command:
  ```
  npm run test
  ```
  Then you can run the application with the following prompt:
  ```
  node index.js
  ```
  As a user after you ran the command you will be asked about the team manager's name, email, employee ID and office number. Then you will be presented with a menu  with the options to add an engineer, add an intern or finish building the team. If you select the engineer option then you will be prompted to enter the engineer's name, employee ID, email and GitHub username. If you select the intern option then you will be asked to enter the intern's name, employee ID, email and school. If you decide to finish the application then the render function will be called, a HTML file will be generated with the given data and it will be written in the team.html document.

  You can see a sample html file in the output folder that has been created with the application. Please refer to the team.html file.

## Contributing
  Any contribution is greatly appreciated.
  If you have any suggestion that would make this project better, please fork the repo and create a pull request. You can also just open an issue with the "enhancement". And also don't forget to give a star to the project!
  1. Fork the Project
  2. Create your Feature Branch (git checkout -b [featurebranch])
  3. Commit your Changes (git commit -m '[add your message here]')
  4. Push to the Branch (git push origin [featurebranch])
  5. Open a Pull Request

  ## Tests
  Please refer to the test files in the __tests__ folder. Feel free to add your own tests as well.

  ## License
  This project is covered under MIT license.

  ## Questions
  If you have got any question feel free to check out my GitHub account on https://github.com/vighimre87 or send me an email to the [vighimre87@gmail.com](mailto:vighimre87@gmail.com) email address.
