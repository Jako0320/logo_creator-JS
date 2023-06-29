const { Circle } = require('./shapes');
const { Square } = require('./shapes');
const { Triangle } = require('./shapes');

describe('Circle', () => {
  test('render() method should return correct SVG markup', () => {
    const shape = new Circle();
    shape.setColor('blue');
    const expectedMarkup = '<circle cx="150" cy="100" r="80" fill="blue" />';
    expect(shape.render()).toEqual(expectedMarkup);
  });
});

describe('Square', () => {
  test('render() method should return correct SVG markup', () => {
    const shape = new Square();
    shape.setColor('blue');
    const expectedMarkup = '<rect x="75" y="25" width="150" height="150" fill="blue" />';
    expect(shape.render()).toEqual(expectedMarkup);
  });
});

describe('Triangle', () => {
  test('render() method should return correct SVG markup', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const expectedMarkup = '<polygon points="150,10 10,190 290,190" fill="blue" />';
    expect(shape.render()).toEqual(expectedMarkup);
  });
});

