// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license == "NONE") {
    return "";
  } else
  {
  let licenseLink = license.license.split(" ").join("%20");
  return `
  ![${license.license}](https://img.shields.io/static/v1?label=License&message=${licenseLink}&color=green)
  `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license == "NONE") {
    return "";
  } else if (license.license == "GNU AGPLv3") {
    return `[${license.license}](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license.license == "GNU LGPLv3") {
    return `[${license.license}](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } else if (license.license == "Apache License 2.0") {
    return `[${license.license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license.license == "GNU GPLv2") {
    return `[${license.license}](https://choosealicense.com/licenses/gpl-2.0/)`;
  } else if (license.license == "GNU GPLv3") {
    return `[${license.license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license.license == "Mozilla Public License 2.0") {
    return `[${license.license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license.license == "MIT License") {
    return `[${license.license}](https://choosealicense.com/licenses/mit/)`;
  } else if (license.license == "ISC License") {
    return `[${license.license}](https://choosealicense.com/licenses/isc)`;
  } else if (license.license == "Boost Software License 1.0") {
    return `[${license.license}](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license.license == "The Unlicense") {
    return `[${license.license}](https://choosealicense.com/licenses/unlicense/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license == "NONE") {
    return "";
  } else 
  {
  return `
  ## License
  ---
  The license used in this project was ${
    license.license
  }. More information about this license can be found at ${renderLicenseLink(
    license
  )}.
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data)}
  
  ## Description
  --- 
  ${data.projectDescription}
  
  ## Table of Contents
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ---
  ${data.installation}
  
  ## Usage
  ---
  ${data.usage}
  
  ## Contribution
  ---
  ${data.contribution}
  ${renderLicenseSection(data)}
  ---
  ## Test
  ---
  ${data.test}
  
  ## Questions
  ---
  My other work can be found at <a href="https://github.com/${
    data.github
  }" title="github profile" target = "blank">${
  data.github
}</a>. If you have any additional questions, you can email me at [${
  data.email
}](mailto:${data.email}).
  
  `;
}

module.exports = generateMarkdown;
