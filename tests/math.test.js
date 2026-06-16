const { add, subtract, multiply, divide, isEven } = require('../src/math');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('returns negative when result is negative', () => {
    expect(subtract(3, 7)).toBe(-4);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('returns a decimal result', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('isEven', () => {
  test('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(isEven(7)).toBe(false);
  });

  test('returns true for zero', () => {
    expect(isEven(0)).toBe(true);
  });
});
