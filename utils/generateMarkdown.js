// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `https://img.shields.io/badge/lisence-MIT-green`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `![MIT](https://opensource.org/licenses/MIT)`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license)
  renderLicenseLink(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
## Description 
${data.Description}

## Installation
${data.Installaton}

## License

${renderLicenseSection(data.License)}


`;
}

module.exports = generateMarkdown;
