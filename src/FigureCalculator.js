class FigureCalculator {
  constructor(mathBasic) {
    this.mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua argument');
    }

    const [length, width] = args;
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: (2 * (length + width))
    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua argument');
    }

    const [length, width] = args;
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: (length * width)
    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('fungsi hanya menerima dua argument');
    }

    const [sideA, sideB, base] = args;
    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: ((sideA + sideB) + base)
    return this.mathBasic.add((sideA + sideB), base);
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua argument');
    }

    const [base, height] = args;
    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    // formula: ((base * height) / 2)
    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
