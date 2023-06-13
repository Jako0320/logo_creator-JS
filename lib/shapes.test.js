const { Triangle } = require('./shapes');

describe('Triangle', () => {
  test('render() method should return correct SVG markup', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const expectedMarkup = '<polygon points="150,10 10,190 290,190" fill="blue" />';
    expect(shape.render()).toEqual(expectedMarkup);
  });
});
