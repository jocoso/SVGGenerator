import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';
import fs from 'fs';

function validateHexNumber(input) {
    const hexRegex = /^#([0-9a-fA-F]{3}){1,2}$/i;
    return hexRegex.test(input) || 'Input must be a valid hexadecimal color code.';
}

async function main() {
    const questions = [
        {
            name: 'text',
            message: 'Enter exactly three characters for the logo text:',
            type: 'input',
            validate: (input) => {
                return input.length === 3 || 'Input must be exactly three characters.';
            }
        },
        {
            name: 'textColor',
            message: 'Enter a hexadecimal color code for the text:',
            type: 'input',
            validate: validateHexNumber,
        },
        {
            name: 'shape',
            message: 'Choose a shape for the logo:',
            type: 'list',
            choices: ['triangle', 'circle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter a hexadecimal color code for the shape:',
            type: 'input',
            validate: validateHexNumber,
        }
    ];

    const answers = await inquirer.prompt(questions);

    let shape;
    switch (answers.shape) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case'square':
            shape = new Square();
            break;
    }

    shape.setColor(answers.shapeColor);
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');

}

(async () => {
    try {
        await main();
    } catch (err) {
        console.error(`There was an error while generating the SVG: ${err.message}`, err);
    }
})();