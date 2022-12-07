// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown')
//console.log('readme gen running')
//const path = require('path); users dictate where to save info?

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a discription of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions, seperate each step with a "-"?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions, seperate each step with a "-"?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use?',
        choices: ['MIT', 'GNU', 'Apache', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any tests?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Please enter your email address'
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.MD',generateMD(data), (err)=> console.log(err))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer=> {
        console.log(answer)
        writeToFile("README.MD", answer)
    })
.catch((error) => {
    console.log(error)
})
}

// Function call to initialize app
init();
/*const mockData = {
  title: 'My project',
  description: 'it does cool stuff and things',
  installation: 'just click',
  usage: 'keep clicking',
  license: 'MIT',
  contributing: "you can't",
  test: 'nope',
  questions: 'sksksksk'
}
  writeToFile("README.MD", mockData)*/