const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./logo.js');

class CLI {
    constructor() {
        
    };
    run() {
        return inquirer//grabbing the user inputs into a res object
            .prompt([
                {
                    name: 'shape',
                    type: 'list',
                    message: 'Welcome to Super Awesome Logo Maker!  Begin with the basic shape of your logo.',
                    choices: ['circle', 'square', 'triangle']
                },
                {
                    name: 'threeCharacters',
                    type: 'input',
                    message: 'Input 3 characters (A-Z, a-z, 0-9) to be placed into the shape.'
                },
                {
                    name: 'characterColor',
                    type: 'input',
                    message: 'What color do you want your characters to be?'
                },
                {
                    name: 'color',
                    type: 'input',
                    message: 'Finish with a color for your shape.'
                }
            ])
            .then((res) => {
                console.log(res);
                return writeFile(
                    join(__dirname, '..', 'examples', 'newLogo.svg'), createLogo(res)//passing res object into createLogo in logo.js
                  );
    })
            
    };
};

module.exports = CLI;