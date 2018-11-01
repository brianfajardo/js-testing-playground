const { sum } = require('./math');

test('sum should add two numbers', () => {
  const result = sum(5, 4);
  const expected = 9;

  expect(result).toEqual(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

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
