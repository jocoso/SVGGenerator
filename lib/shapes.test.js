const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should inherit render method from Shape', () => {
        const triangle = new Triangle();
        expect(triangle.render).toBeInstanceOf(Function);
    });
});

describe('Circle', () => {
    test('should inherit render method from Shape', () => {
        const circle = new Circle();
        expect(circle.render).toBeInstanceOf(Function);
    });
});

describe('Square', () => {
    test('should inherit render method from Shape', () => {
        const square = new Square();
        expect(square.render).toBeInstanceOf(Function);
    });
});