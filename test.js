const { sum } = require('./math');

const result = sum(5, 4);
const expected = 9;

if (result !== expected) {
  throw new Error(`${result} does not equal ${expected}`);
}
