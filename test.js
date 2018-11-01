const { sum } = require('./math');

const result = sum(5, 4);
const expected = 9;

expect(result).toEqual(expected); // Throws error!
expect('hello world').toBeString(); // Pass
expect(15).toBeNumber(); // Pass
expect(3).toBeLessThan(5); // Pass

function expect(result) {
  if (!result) {
    throw new Error('Test value not provided');
  }

  return {
    toEqual(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    toNotEqual(expected) {
      if (result === expected) {
        throw new Error(`${result} is equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (result < expected) {
        throw new Error(`${result} is not greater than ${expected}`);
      }
    },
    toBeLessThan(expected) {
      if (result > expected) {
        throw new Error(`${result} is not less than ${expected}`);
      }
    },
    toBeString() {
      if (typeof result !== 'string') {
        throw new Error(`${result} is not of type string`);
      }
    },
    toBeNumber() {
      if (typeof result !== 'number') {
        throw new Error(`${result} is not of type number`);
      }
    },
  };
}
