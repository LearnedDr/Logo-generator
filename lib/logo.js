const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createLogo(logoProperties) {//changed res object from cli.js into logoProperties
    const { color, threeCharacters, characterColor, shape } = logoProperties;//deconstruction of object for easier access to properties
    // console.log(typeof color);
    // console.log(threeCharacters);
    if (shape === 'circle') {
        const circle = new Circle(color, threeCharacters, characterColor, shape).render();
        return circle;
    };
    if (shape === 'square') {
        const square = new Square(color, threeCharacters, characterColor, shape).render();
        return square;
    };
    if (shape === 'triangle') {
        const triangle = new Triangle(color, threeCharacters, characterColor, shape).render();
        return triangle;
    };

    
}


module.exports = {createLogo};



