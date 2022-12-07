// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown')
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
        message: 'Please enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use?',
        choices: ['MIT', 'ISC', 'GNUGPLv3', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter in the contribution guidelines, if any'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions, if any'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Please enter your GitHub user name'
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.MD',generateMD(data), (err)=> {
        if(err) {
            console.log('Could not save file') 
        } else {
            console.log('File saved')
        }
    })
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
 title: 'test',
  description: 'test',
  installation: '- step1 - step2',
  usage: '-step1-step2',
  license: 'MIT',
  contributing: 'no',
  test: 'no',
  questions: 'no',
  question2: 'no'
}

  writeToFile("README.MD", mockData)*/