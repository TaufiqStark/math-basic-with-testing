const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });
    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);
      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);
      // Assert
      expect(result).toEqual(60);// 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);// (length + width)
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
    });
    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);
      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);
      // Assert
      expect(result).toEqual(200);// (length * width)
      expect(spyMultiply).toHaveBeenCalledWith(20, 10);// (length * width)
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, '1')).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, '2', [])).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], {}, '3')).toThrowError();
    });
    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const sideA = 20;
      const sideB = 10;
      const base = 30;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);
      // Action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);
      // Assert
      expect(result).toEqual(60);// (length + width) + base
      expect(spyAdd).toHaveBeenCalledWith((sideA + sideB), base);
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
    });
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
    });
    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);
      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);
      // Assert
      expect(result).toEqual(100);// (base * height) / 2
      expect(spyMultiply).toHaveBeenCalledWith(20, 10);// (base * height)
      expect(spyDivide).toHaveBeenCalledWith(200, 2);// (base * height) / 2
    });
  });
});