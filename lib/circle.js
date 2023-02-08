const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(color, threeCharacters, characterColor, shape) {
        super(color, threeCharacters, characterColor, shape)
        // console.log(typeof color);
        // console.log(typeof this.renderShapeColor());
        // console.log(threeCharacters);
        // console.log(this.renderThreeCharacters());
    };
    render() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.renderShapeColor()}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.renderCharacterColor()}">${this.renderThreeCharacters()}</text>
      
      </svg>`
    };
};

module.exports = Circle;