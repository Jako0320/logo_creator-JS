const fs = require('fs');
const inquirer = require('inquirer');

//Bringing in shapes constant for parameters from shapes.js
const { Circle, Triangle, Square } = require('./lib/shapes');

//Input menu
const questions = [
  {
    name: 'text',
    type: 'input',
    message: 'Enter 3 letters for the logo:',  
  },
  {
    name: 'textColor',
    type: 'input',
    message: 'Enter the preferred text color:',
  },
  {
    name: 'shapeType',
    type: 'list',
    message: 'Choose a shape from the following:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    name: 'shapeColor',
    type: 'input',
    message: 'Enter the preferred color for the shape:',
  },
];

//Function to create the logo according to input
function createLogo({ text, textColor, shapeType, shapeColor }) {
  let shape;

//Bring in the shape selected parameters
  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape selection.');
      return;
  }

  shape.setColor(shapeColor);

  //Render the shape with the 3 letters input in it
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="125" text-anchor="middle" font-size="60" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  //Write the resulting logo to a .svg file in the local folder
  fs.writeFile(`${shapeType}.svg`, svgContent, (err) => {
    if (err) {
      console.error('Error creating the file:', err);
      return;
    }
    console.log('Logo generated');
  });
}

//Start function
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    createLogo(answers);
  });
}

askQuestions();