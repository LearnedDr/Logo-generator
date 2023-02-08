const Shape = require('./shapes.js');

class Triangle extends Shape {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182"' //I think I need to take off the end tag and put it unto color?
    };
};

module.exports = Triangle;