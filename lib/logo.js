const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createLogo(logoProperties) {
    const { color, threeCharacters, characterColor, shape } = logoProperties;
    // console.log(typeof color);
    // console.log(threeCharacters);
    if (shape === 'circle') {
        const circle = new Circle(color, threeCharacters, characterColor, shape).render();
        return circle;
    };
    if (shape === 'square') {
        const square = new Square(color, threeCharacters, characterColor, shape).render();
    };
    if (shape === 'triangle') {
        const triangle = new Triangle(color, threeCharacters, characterColor, shape).render();
    };

    
}


module.exports = {createLogo};

// function createDocument(title, tasks = []) {
//     const header = new Header().render();
//     const taskListItems = tasks.map(
//       (t) => new TaskListItem([t.text], t.priority)
//     );
//     const taskList = new TaskList(taskListItems).render();

