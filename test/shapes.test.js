const Circle = require('../lib/circle.js')

describe('Circle', () => {
    describe('shape color', () => {
        it('should return the proper color of the shape', () => {
            const myCircle = new Circle('black', 'jlc', 'yellow', 'circle');
            expect(myCircle.renderShapeColor()).toEqual('black');
        })


    })
})


// A testing suite for Arithmetic is created.
// describe('Arithmetic', () => {
//     // A test is created to check that sum does in fact return the two numbers added together.
//     describe('sum', () => {
//       it('should take two numbers and add them together', () => {
//         const total = 4;
//         const arithmetic = new Arithmetic();
//         expect(arithmetic.sum(2, 2)).toEqual(total);
//       });
//     });
//   });