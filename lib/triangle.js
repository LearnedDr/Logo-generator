const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(color, threeCharacters, characterColor, shape) {
        super(color, threeCharacters, characterColor, shape)
        // console.log(typeof color);
        // console.log(typeof this.renderShapeColor());
        // console.log(threeCharacters);
        // console.log(this.renderThreeCharacters());
    };
    render() {
         //'<polygon points="150, 18 244, 182 56, 182"' I think I need to take off the end tag and put it unto color?
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.renderShapeColor()}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.renderCharacterColor()}">${this.renderThreeCharacters()}</text>
      
        </svg>`
    };
};

module.exports = Triangle;//sending to logo.js