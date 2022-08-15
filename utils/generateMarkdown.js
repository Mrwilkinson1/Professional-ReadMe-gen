
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `https://img.shields.io/badge/lisence-MIT-green`;
      break;
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `![MIT](https://opensource.org/licenses/MIT)`;
      break;
  }
}


function renderLicenseSection(license) {
  renderLicenseBadge(license)
  renderLicenseLink(license)
}


function generateMarkdown(data) {
  return `# ${data.Title}
## Description 
${data.Description}

## Installation
${data.Installaton}

## License
${renderLicenseSection(data.License)}

##Installation
${data.Installation}

##Usage
${data.Usage}

##contributing
${data.contributing}

##Tests
${data.test}

##Email
${data.Email}

##Github
${data.github}


`;
}

module.exports = generateMarkdown;
