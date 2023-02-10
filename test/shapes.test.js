const Circle = require('../lib/circle.js')
const Triangle = require('../lib/triangle.js');
const Square = require('../lib/square.js');

describe('Circle', () => {
    const myCircle = new Circle('black', 'jlc', 'yellow', 'circle');
    describe('shape color', () => {
        it('should return the proper color of the shape', () => {
            expect(myCircle.renderShapeColor()).toEqual('black');
        });
    });
    describe('threeCharacters', () => {
        it('should return the proper three characters', () => {
            expect(myCircle.renderThreeCharacters()).toEqual('jlc');
        });
    });
    describe('text color', () => {
        it('should return the proper text color', () => {
            expect(myCircle.renderCharacterColor()).toEqual('yellow');
        });
    });
});

describe('Triangle', () => {
    const myTriangle = new Triangle('black', 'jlc', 'yellow', 'circle');
    describe('shape color', () => {
        it('should return the proper color of the shape', () => {
            expect(myTriangle.renderShapeColor()).toEqual('black');
        });
    });
    describe('threeCharacters', () => {
        it('should return the proper three characters', () => {
            expect(myTriangle.renderThreeCharacters()).toEqual('jlc');
        });
    });
    describe('text color', () => {
        it('should return the proper text color', () => {
            expect(myTriangle.renderCharacterColor()).toEqual('yellow');
        });
    });
});

describe('Square', () => {
    const mySquare = new Square('black', 'jlc', 'yellow', 'circle');
    describe('shape color', () => {
        it('should return the proper color of the shape', () => {
            expect(mySquare.renderShapeColor()).toEqual('black');
        });
    });
    describe('threeCharacters', () => {
        it('should return the proper three characters', () => {
            expect(mySquare.renderThreeCharacters()).toEqual('jlc');
        });
    });
    describe('text color', () => {
        it('should return the proper text color', () => {
            expect(mySquare.renderCharacterColor()).toEqual('yellow');
        });
    });
});

