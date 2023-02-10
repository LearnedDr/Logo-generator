const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(color, threeCharacters, characterColor, shape) {
        super(color, threeCharacters, characterColor, shape)
        // console.log(typeof color);
        // console.log(typeof this.renderShapeColor());
        // console.log(threeCharacters);
        // console.log(this.renderThreeCharacters());
    };
    render() {
        // return '<rect x="10" y="10" width="30" height="30"/>' //I think I need to take off the end tag and put it unto color?
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="160" height="160" fill="${this.renderShapeColor()}" />
      
        <text x="85" y="110" font-size="60" text-anchor="middle" fill="${this.renderCharacterColor()}">${this.renderThreeCharacters()}</text>
      
      </svg>`
    };
    //my square is no good :(
}

module.exports = Square;//sending to logo.js