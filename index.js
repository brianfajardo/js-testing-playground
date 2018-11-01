const expect = require('./expect');
const test = require('./test-framework');
const { sum, sumAsync } = require('./math');

// Failing test 1
test('sum should add two numbers', () => {
  const result = sum(5, 4);
  const expected = 9;

  expect(result).toEqual(expected);
});

// Failing test 2
test('sumAsync should add two numbers', async () => {
  const result = await sumAsync(3, 2);
  const expected = 5;

  expect(result).toEqual(expected);
});
