// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'No License') {
    return ""
  } else {
    return `# License 
    ${license}`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [How to contribute](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)
  
  # Installation

  ${data.installation}

  ## Usage
  ${data.usage}

 ${renderLicenseSection(data.license)}

  ## Contribution

   ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me at ${data.questions} or on GitHub ${data.question2}
  
`;
}

module.exports = generateMarkdown;


