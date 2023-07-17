const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => /^[a-zA-Z0-9]{0,3}$/.test(input),
        filter: input => input.toUpperCase()
      },
      {
        name: 'textColor',
        message: 'Enter text color:',
        validate: input => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input),
        filter: input => input.replace('#', '')
      },
      {
        name: 'shape',
        message: 'Choose a shape:',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
      },
      {
        name: 'shapeColor',
        message: 'Enter shape color:',
        validate: input => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(input),
        filter: input => input.replace('#', '')
      }
    ])
    .then(answers => {
        // Handle user's answers
    const svg = generateSVG(answers);

    // Write SVG to file
    const filename = 'logo.svg';
    fs.writeFile(filename, svg, err => {
      if (err) {
        console.error('Error creating SVG file:', err);
        return;
      }
      console.log(`Generated ${filename}`);
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });

  // Helper function to generate SVG content
function generateSVG(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const svgTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="#${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#${textColor}" font-size="50">${text}</text>
  </svg>`;

  return svgTemplate;
}