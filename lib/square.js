const Shape = require('./shapes.js');

class Square extends Shape {
    render() {
        return '<rect x="10" y="10" width="30" height="30"/>' //I think I need to take off the end tag and put it unto color?
    }
}

module.exports = Square;