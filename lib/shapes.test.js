import { Shape, Triangle, Circle, Square } from './shapes.js';

describe('Shape Classes', () => {
  describe('Triangle', () => {
    it('should inherit from Shape', () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Shape);
    });

    it('should set color correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('#FF5733');
      expect(triangle.color).toBe('#FF5733');
    });

    it('should inherit render method from Shape', () => {
      const triangle = new Triangle();
      expect(triangle.render).toBeInstanceOf(Function);
    });

    it('should render correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('#FF5733');
      expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="#FF5733" />');
    });
  });

  describe('Circle', () => {
    it('should inherit from Shape', () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Shape);
    });

    it('should set color correctly', () => {
      const circle = new Circle();
      circle.setColor('#FF5733');
      expect(circle.color).toBe('#FF5733');
    });

    it('should inherit render method from Shape', () => {
      const circle = new Circle();
      expect(circle.render).toBeInstanceOf(Function);
    });

    it('should render correctly', () => {
      const circle = new Circle();
      circle.setColor('#FF5733');
      expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="#FF5733" />');
    });
  });

  describe('Square', () => {
    it('should inherit from Shape', () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Shape);
    });

    it('should set color correctly', () => {
      const square = new Square();
      square.setColor('#FF5733');
      expect(square.color).toBe('#FF5733');
    });

    it('should inherit render method from Shape', () => {
      const square = new Square();
      expect(square.render).toBeInstanceOf(Function);
    });

    it('should render correctly', () => {
      const square = new Square();
      square.setColor('#FF5733');
      expect(square.render()).toBe('<rect x="100" y="100" width="100" height="100" fill="#FF5733" />');
    });
  });
});
