const fs = require('fs');
const inquirer = require('inquirer');

const { Circle, Triangle, Square } = require('./lib/shapes');

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

function createLogo({ text, textColor, shapeType, shapeColor }) {
  let shape;

  switch (shapeType.toLowerCase()) {
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

