class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,10 10,200 290,200" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };